package com.auction.server.controllers;

import com.auction.server.entities.GoodsInfo;
import com.auction.server.services.AccountInfoSevice;
import com.auction.server.services.AuctionInfoService;
import com.auction.server.services.GoodsInfoService;
import com.auction.server.services.UserInfoService;
import com.google.gson.Gson;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@RestController
@RequestMapping(value = "/auction")
public class AuctionInfoController {

    @Resource(name = "user-info-service", type = UserInfoService.class)
    private UserInfoService userInfoService;

    @Resource(name = "goods-info-service", type = GoodsInfoService.class)
    private GoodsInfoService goodsInfoService;

    @Resource(name = "account-info-service", type = AccountInfoSevice.class)
    private AccountInfoSevice accountInfoService;

    @Resource(name = "auction-info-service", type = AuctionInfoService.class)
    private AuctionInfoService auctionInfoService;

    Gson gson = new Gson();

    @GetMapping(value = "/getgoodsinfobyuseridgstate0")
    public List<GoodsInfo> getGoodsInfoByUserIdGstate0(@RequestParam("userid") Integer userid){
        List< Object> goodsList = auctionInfoService.getAuctionByUserid(userid);
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if(goodsList.size()>0){
            for (int i = 0; i < goodsList.size(); i++) {
                GoodsInfo goodsInfo = goodsInfoService.findById((Integer) goodsList.get(i));
                if("未出售".equals(goodsInfo.getGoodstate())){
                    goodsInfoList.add(goodsInfo);
                }
            }
        }
        return goodsInfoList;
    }

    @GetMapping(value = "/getgoodsinfobyuseridgstate1")
    public List<GoodsInfo> getGoodsInfoByUserIdGstate1(@RequestParam("userid") Integer userid){
        List< Object> goodsList = auctionInfoService.getAuctionByUserid(userid);
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if(goodsList.size()>0){
            for (int i = 0; i < goodsList.size(); i++) {
                GoodsInfo goodsInfo = goodsInfoService.findById((Integer) goodsList.get(i));
                if("已出售".equals(goodsInfo.getGoodstate())){
                    goodsInfoList.add(goodsInfo);
                }
            }
        }
        return goodsInfoList;
    }
}
