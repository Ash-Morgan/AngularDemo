package com.auction.server.controllers;

import com.auction.server.entities.UserInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.UserInfoService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@RestController
@RequestMapping(value = "/user")
public class UserInfoController  extends Cross {

    @Resource(name = "user-info-service", type = UserInfoService.class)
    private UserInfoService userInfoService;

    Gson gson = new Gson();

    @ResponseBody
    @PostMapping("/postuserinfo")
    public Map<String, String> postUserInfo(@RequestBody UserInfo userInfo) {
        Map<String, String> map = new HashMap<>();
        System.out.println("+++++++++++++"+userInfo.getUsername());
        UserInfo info = userInfoService.getUserInfoByUname(userInfo.getUsername());
        if (info != null && info.getUserpwd().equals(userInfo.getUserpwd())) {
            System.out.println("校验成功！");
            System.out.println("+++++++++++"+info.getUserid());
            map.put("user",gson.toJson(info));
            map.put("result", "success");
        } else {
            System.out.println("未查询到数据！");
            map.put("result", "error");
        }
        return map;
    }


}
