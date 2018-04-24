package com.auction.server.controllers;

import com.auction.server.entities.AccountInfo;
import com.auction.server.entities.GoodsInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.AccountInfoSevice;
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

    @Resource(name = "account-info-service", type = AccountInfoSevice.class)
    private AccountInfoSevice accountInfoService;

    Gson gson = new Gson();

    @GetMapping(value = "/getallgoodsinfo")
    public List<GoodsInfo> getGoodsInfo() {
        return goodsInfoService.getAllGoodsInfo();
    }

    @ResponseBody
    @GetMapping(value = "/getbyid")
    public GoodsInfo getInfoById(@RequestParam("id") int id) {
        System.out.println("++++++++++++++++++++++++++id = " + id);
        return goodsInfoService.findById(id);
    }

    @ResponseBody
    @PostMapping("/posthighaccount")
    public Map<String, String> postHighAccount(@RequestBody Map<String,Object> params) {
        System.out.println("+++++++++++++++++++++++++++++");
        System.out.println("+++++++++++++++++++++++++++++");
        System.out.println(params.get("params"));
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        int goodsid = (int)param.get("goodsid");
        String username = param.get("username").toString();
        Double goodsghighaccount = (Double) param.get("goodsghighaccount");
        System.out.println("+++++++++++++++++++++++++++++"+goodsid);
        System.out.println("+++++++++++++++++++++++++++++"+username);
        System.out.println("+++++++++++++++++++++++++++++"+goodsghighaccount);
        Map<String, String> map = new HashMap<>();
        GoodsInfo info = null;
        AccountInfo accountInfo = accountInfoService.findByUserName(username);
        System.out.println(accountInfo.getAccountid());
        if (accountInfo.getAmount() >= goodsghighaccount) {
            info = goodsInfoService.updateHighAccount(goodsInfoService.findById(goodsid));
        }
        if (info != null) {
            map.put("goodsinfo", gson.toJson(info));
            System.out.println("更新成功！");
            map.put("result", "success");
        } else {
            System.out.println("更新失败!");
            map.put("result", "error");
        }
        return map;
    }
}
