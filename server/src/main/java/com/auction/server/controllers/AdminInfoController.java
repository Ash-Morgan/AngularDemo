package com.auction.server.controllers;

import com.auction.server.entities.AdminInfo;
import com.auction.server.services.AdminInfoService;
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
@RequestMapping(value = "/admin")
public class AdminInfoController {
    @Resource(name = "admin-info-service", type = AdminInfoService.class)
    private AdminInfoService adminInfoService;

    Gson gson = new Gson();

    @ResponseBody
    @PostMapping("/adminlogin")
    public Map<String, String> postUserInfo(@RequestBody AdminInfo adminInfo) {
        Map<String, String> map = new HashMap<>();
        System.out.println("+++++++++++++"+adminInfo.getWorkid());
        AdminInfo info = adminInfoService.getAdminInfoByWorkId(adminInfo.getWorkid());
        if (info != null && adminInfo.getAdminpwd().equals(info.getAdminpwd())) {
            System.out.println("校验成功！");
            System.out.println("+++++++++++"+info.getWorkid());
            map.put("user",gson.toJson(info));
            map.put("result", "success");
        } else {
            System.out.println("未查询到数据！");
            map.put("result", "error");
        }
        return map;
    }
}
