package com.auction.server.controllers;

import com.auction.server.entities.UserInfo;
import com.auction.server.general.Cross;
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
@RequestMapping(value = "/user")
public class UserInfoController extends Cross {

    @Resource(name = "user-info-service", type = UserInfoService.class)
    private UserInfoService userInfoService;

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


    @GetMapping(value = "/checktest")
    public boolean checktest(@RequestParam("username") String username) {
        System.out.println("++++++++++++++++++++++++++username = " + username);
        return false;
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
}
