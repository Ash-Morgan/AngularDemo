package com.auction.server.controllers;

import com.auction.server.entities.AccountInfo;
import com.auction.server.entities.GoodsInfo;
import com.auction.server.entities.UserInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.AccountInfoSevice;
import com.auction.server.services.BusinessInfoService;
import com.auction.server.services.GoodsInfoService;
import com.auction.server.services.UserInfoService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@RestController
@RequestMapping(value = "/goods")
public class GoodsInfoController extends Cross {

    @Resource(name = "user-info-service", type = UserInfoService.class)
    private UserInfoService userInfoService;

    @Resource(name = "goods-info-service", type = GoodsInfoService.class)
    private GoodsInfoService goodsInfoService;

    @Resource(name = "account-info-service", type = AccountInfoSevice.class)
    private AccountInfoSevice accountInfoService;

    @Resource(name = "business-info-service", type = BusinessInfoService.class)
    private BusinessInfoService businessInfoService;

    Gson gson = new Gson();

    @GetMapping(value = "/getallgoodsinfo")
    public List<GoodsInfo> getGoodsInfo() {
        return goodsInfoService.getAllGoodsInfo();
    }

    @GetMapping(value = "/getbyid")
    public GoodsInfo getInfoById(@RequestParam("id") int id) {
        System.out.println("++++++++++++++++++++++++++id = " + id);
        return goodsInfoService.findById(id);
    }

    @ResponseBody
    @PostMapping("/posthighaccount")
    public Map<String, String> postHighAccount(@RequestBody Map<String,Object> params) {
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        int goodsid = (int)param.get("goodsid");
        String username = param.get("username").toString();
        Double goodsghighaccount =Double.parseDouble(param.get("goodsghighaccount")+".0");
        Map<String, String> map = new HashMap<>();
        GoodsInfo goodsInfo = null;
        UserInfo userInfo = userInfoService.getUserInfoByUname(username);
        AccountInfo accountInfo = accountInfoService.findByUserId(userInfo.getUserid());
        if (accountInfo.getAmount() >= goodsghighaccount) {
            GoodsInfo template = goodsInfoService.findById(goodsid);
            template.setGhighaccount(goodsghighaccount);
            goodsInfo = goodsInfoService.updateHighAccount(template);
        }
        if (goodsInfo != null) {
            businessInfoService.updateBusinessInfo(userInfo.getUserid(),
                    goodsInfo.getGoodsid(),goodsInfo.getGhighaccount(),"余额");
            map.put("goodsinfo", gson.toJson(goodsInfo));
            System.out.println("更新成功！");
            map.put("result", "success");
        } else {
            System.out.println("更新失败!");
            map.put("result", "error");
        }
        return map;
    }


}
