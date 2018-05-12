package com.auction.server.controllers;

import com.auction.server.entities.AccountChange;
import com.auction.server.entities.AccountInfo;
import com.auction.server.entities.UserInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.AccountChangeService;
import com.auction.server.services.AccountInfoSevice;
import com.auction.server.services.UserInfoService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@RestController
@RequestMapping(value = "/user")
public class UserInfoController extends Cross {

    @Resource(name = "user-info-service", type = UserInfoService.class)
    private UserInfoService userInfoService;

    @Resource(name = "account-info-service", type = AccountInfoSevice.class)
    private AccountInfoSevice accountInfoSevice;

    @Resource(name = "account-change-service", type = AccountChangeService.class)
    private AccountChangeService accountChangeService;

    Gson gson = new Gson();

    /**
     * 获取所有用户信息
     * @return List<UserInfo>
     */
    @GetMapping(value = "/getallusers")
    public List<UserInfo> getAllUsers() {
        return userInfoService.getAllUserInfoByUstate(1);
    }

    @ResponseBody
    @PostMapping("/postuserinfo")
    public Map<String, String> postUserInfo(@RequestBody UserInfo userInfo) {
        Map<String, String> map = new HashMap<>();
        System.out.println("+++++++++++++" + userInfo.getUsername());
        UserInfo info = userInfoService.getUserInfoByUname(userInfo.getUsername());
        if (info != null && userInfo.getUserpwd().equals(info.getUserpwd()) && info.getUstate() == 1) {
            System.out.println("校验成功！");
            System.out.println("+++++++++++" + info.getUserid());
            map.put("user", gson.toJson(info));
            map.put("result", "success");
        } else {
            System.out.println("未查询到数据！");
            map.put("result", "error");
        }
        return map;
    }

    @ResponseBody
    @PostMapping("/registeruser")
    public Map<String, String> registerUser(@RequestBody UserInfo userInfo) {
        Map<String, String> map = new HashMap<>();
        userInfo.setUstate(0);
        if (userInfoService.saveUserInfo(userInfo) != null) {
            map.put("result", "success");
        } else {
            map.put("result", "error");
        }
        return map;
    }

    @GetMapping(value = "/checkusername")
    public Map<String, String> checkusername(@RequestParam("username") String username) {
        System.out.println("++++++++++++++++++++++++++username = " + username);
        Map<String, String> map = new HashMap<>();
        UserInfo userInfo = userInfoService.getUserInfoByUname(username);
        System.out.println("++++++++++++++++++++++++++userInfo = " + userInfo.getUsername());
        if (userInfo.getUsername() != null) {
            map.put("result", "notEmpty");
        } else {
            map.put("result", "isEmpty");
        }
        return map;
    }

    /**
     * 获取所有商品信息
     * @return List<UserInfo>
     */
    @GetMapping(value = "/getnotcheck")
    public List<UserInfo> getNotCheck() {
        return userInfoService.getAllUserInfoByUstate(0);
    }

    /**
     * 更新用户状态
     * @param params
     */
    @ResponseBody
    @PostMapping("/postchecksign")
    public void postCheckSign(@RequestBody Map<String,Object> params){
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        Integer sign = (Integer)params.get("sign");
        UserInfo userInfo = gson.fromJson(gson.toJson(param),UserInfo.class);
        userInfo.setUstate(sign);
        userInfoService.saveUserInfo(userInfo);
    }

    /**
     * 获取所有不合格的用户信息
     * @return List<UserInfo>
     */
    @GetMapping(value = "/getcheckfailed")
    public List<UserInfo> getCheckFailedGoodsInfo() {
        return userInfoService.getAllUserInfoByUstate(2);
    }


    /**
     * 更新用户信息
     * @param userInfo
     * @return
     */
    @ResponseBody
    @PostMapping("/updateuser")
    public Map<String, String> updateUser(@RequestBody UserInfo userInfo) {
        Map<String, String> map = new HashMap<>();
        if (userInfoService.saveUserInfo(userInfo) != null) {
            map.put("result", "success");
        } else {
            map.put("result", "error");
        }
        return map;
    }

    /**
     * 删除指定商品
     * @param params
     */
    @ResponseBody
    @PostMapping("/deleteuserinfo")
    public void deletegoodsinfo(@RequestBody Map<String,Object> params) {
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        UserInfo userInfo = gson.fromJson(gson.toJson(param),UserInfo.class);
        userInfo.setUstate(2);
        userInfoService.saveUserInfo(userInfo);
    }

    /**
     * 获取指定用户信息
     * @return Map<String, String>
     */
    @GetMapping(value = "/getbyusername")
    public Map<String, String> getUserInfoByUsername(@RequestParam("username") String username){
        Map<String, String> map = new HashMap<>();
        UserInfo userInfo = userInfoService.getUserInfoByUname(username);
        map.put("userinfo", gson.toJson(userInfo));
        return map;
    }

    /**
     * 获取指定用户信息
     * @return Map<String, String>
     */
    @GetMapping(value = "/getaccountbyuserid")
    public Map<String, String> getAccountByUsername(@RequestParam("userid") Integer userid){
        Map<String, String> map = new HashMap<>();
        AccountInfo accountInfo = accountInfoSevice.findByUserId(userid);
        map.put("accountinfo", gson.toJson(accountInfo));
        return map;
    }


    @ResponseBody
    @PostMapping("/setaccountinfo")
    public Map<String, String> setAccountInfo(@RequestBody Map<String,Object> params) {
        Map<String, String> map = new HashMap<>();
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        System.out.println(param);
        Integer accountid = (Integer)param.get("accountid");
        Integer userid = (Integer)param.get("userid");
        Double amount = Double.parseDouble((Integer)param.get("amount")+"");
        String content = (String)param.get("content");
        AccountChange accountChange = new AccountChange();
        accountChange.setCaccountid(accountid);
        accountChange.setCuserid(userid);
        accountChange.setCamount(amount);
        accountChange.setCcontent(content);
        SimpleDateFormat df = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");//设置日期格式
        accountChange.setCdate(df.format(new Date()));
        accountChange.setCstate(0);
        AccountChange reback = accountChangeService.save(accountChange);
        map.put("reback", gson.toJson(reback));
        return map;
    }

    @GetMapping(value = "/getaccountchangebyid")
    public Map<String, String> getAccountChangeById(@RequestParam("changeid") Integer changeid){
        Map<String, String> map = new HashMap<>();
        AccountChange accountChange = accountChangeService.getAccountChangeById(changeid);
        map.put("accountchange", gson.toJson(accountChange));
        return map;
    }

    @GetMapping(value = "/getallaccountchangebyuserid")
    public List<AccountChange> getAllAccountChangeByUserId(@RequestParam("userid") Integer userid){
        return accountChangeService.getAllAccountChangeByUserId(userid);
    }

    @GetMapping(value = "/deleteaccountinfo")
    public void deleteAccountInfo(@RequestParam("changeid") Integer changeid){
        AccountChange accountChange = accountChangeService.getAccountChangeById(changeid);
        accountChange.setCstate(2);
        accountChangeService.save(accountChange);
    }
}
