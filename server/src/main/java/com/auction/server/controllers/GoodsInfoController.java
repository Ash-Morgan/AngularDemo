package com.auction.server.controllers;

import com.auction.server.entities.GoodsInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.GoodsInfoService;
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

    @Resource(name = "goods-info-service", type = GoodsInfoService.class)
    private GoodsInfoService goodsInfoService;

    Gson gson =new Gson();

    @GetMapping(value = "/getallgoodsinfo")
    public List<GoodsInfo> getGoodsInfo() {
        return goodsInfoService.getAllGoodsInfo();
    }

    @ResponseBody
    @GetMapping(value = "/getbyid")
    public GoodsInfo getInfoById(@RequestParam("id") int id) {
        System.out.println("++++++++++++++++++++++++++id = "+id);
        return goodsInfoService.findById(id);
    }

    @ResponseBody
    @PostMapping("/posthighaccount")
    public Map<String, String> postUserInfo(@RequestBody GoodsInfo goodsInfo) {
        Map<String, String> map = new HashMap<>();
        System.out.println("+++++++++++++++++++++++++++++++++++++" + goodsInfo.getGhighaccount());
        GoodsInfo info = goodsInfoService.updateHighAccount(goodsInfo);
        map.put("goodsinfo",gson.toJson(info));
        if (info != null) {
            System.out.println("更新成功！");
            map.put("result", "success");
        } else {
            System.out.println("更新失败!");
            map.put("result", "error");
        }
        return map;
    }
}
