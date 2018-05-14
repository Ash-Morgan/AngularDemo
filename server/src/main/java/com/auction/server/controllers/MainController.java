package com.auction.server.controllers;


import com.auction.server.entities.AccountChange;
import com.auction.server.entities.AccountInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.AccountChangeService;
import com.auction.server.services.AccountInfoSevice;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;

import javax.annotation.Resource;
import javax.servlet.http.HttpSession;
import java.io.File;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/main")
public class MainController extends Cross {
    @Resource(name = "account-change-service", type = AccountChangeService.class)
    private AccountChangeService accountChangeService;

    @Resource(name = "account-info-service", type = AccountInfoSevice.class)
    private AccountInfoSevice accountInfoService;

    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public ModelAndView demo(ModelAndView modelAndView){
        modelAndView.setViewName("index");
        return modelAndView;
    }

    @GetMapping(value = "/changestate")
    public ModelAndView changestate(ModelAndView modelAndView,
                                       HttpSession session){
        Integer changeid = (Integer) session.getAttribute("changeid");
        AccountChange accountChange = accountChangeService.getAccountChangeById(changeid);
        accountChange.setCstate(1);
        accountChangeService.save(accountChange);
        AccountInfo accountInfo = accountInfoService.findByUserId(accountChange.getCuserid());
        accountInfo.setAmount(accountInfo.getAmount()+accountChange.getCamount());
        accountInfoService.save(accountInfo);
        modelAndView.setViewName("rechargesuccess");
        return modelAndView;
    }

    @RequestMapping(value = "/checkrecharge",method = RequestMethod.GET)
    public ModelAndView checkrecharge(ModelAndView modelAndView,
                                      HttpSession session,
                                      @RequestParam("changeid") Integer changeid){
        System.out.println(changeid);
        session.setAttribute("changeid",changeid);
        modelAndView.setViewName("checkrecharge");
        return modelAndView;
    }

    @RequestMapping(value = "/getserverip",method = RequestMethod.GET)
    public Map<String,String> getServerIP(){
        Map<String, String> map = new HashMap<>();
        InetAddress addr = null;
        try {
            addr = InetAddress.getLocalHost();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        System.out.println("Local HostAddress:"+addr.getHostAddress());
        String ipaddress = addr.getHostAddress();
        map.put("ipaddress", ipaddress);
        return map;
    }

    @ResponseBody
    @PostMapping("/uploadpicture")
    public Map<String,String> uploadPicture(
            @RequestParam(value="file",required=false) MultipartFile file,
            @RequestParam(value="goodsid")Integer goodsid,
            @RequestParam(value="size")Integer size){
        Map<String, String> map = new HashMap<>();
        System.out.println("upload picture");
        System.out.println(file.getOriginalFilename());
        Integer num = size+1;
        try {
            savePic(file,"goods"+goodsid+"_"+num);
        } catch (Exception e) {
            e.printStackTrace();
        }
        return map;
    }

    private void savePic(MultipartFile file, String fileName)throws Exception {
        String path="";
        if(!file.isEmpty()){
            //获得文件后缀名称
            path="C:\\Users\\Administrator\\Desktop\\GraduationDesign\\Project\\AuctionSystem\\auction\\src\\assets\\images\\goods\\"+fileName+".jpg";
            file.transferTo(new File(path));
        }
        System.out.println(path);
    }
}
