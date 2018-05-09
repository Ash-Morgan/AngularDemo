package com.auction.server.controllers;

import com.auction.server.entities.*;
import com.auction.server.general.Cross;
import com.auction.server.services.*;
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

    @Resource(name = "goods-type-service", type = GoodsTypeService.class)
    private GoodsTypeService goodsTypeService;

    @Resource(name = "auction-info-service", type = AuctionInfoService.class)
    private AuctionInfoService auctionInfoService;

    Gson gson = new Gson();

    /**
     * 获取所有商品信息
     * @return List<GoodsInfo>
     */
    @GetMapping(value = "/getallgoodsinfo")
    public List<GoodsInfo> getGoodsInfo() {
        return goodsInfoService.getAllGoodsInfoByGstate(1);
    }

    /**
     * 根据商品编号获取商品信息
     * @param id
     * @return Map<String, String>
     */
    @GetMapping(value = "/getbyid")
    public Map<String, String> getInfoById(@RequestParam("id") int id) {
        Map<String, String> map = new HashMap<>();
        List<AuctionInfo> auctionInfoList = auctionInfoService.getTopFromAuction(id);
        map.put("auctionInfoList", gson.toJson(auctionInfoList));
        GoodsInfo goodsInfo = goodsInfoService.findById(id);
        map.put("goodsinfo", gson.toJson(goodsInfo));
        return map;
    }

    /**
     * 用户对拍卖商品出价
     * @param params
     * @return Map<String, String>
     */
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

    /**
     * 删除指定商品
     * @param params
     */
    @ResponseBody
    @PostMapping("/deletegoodsinfo")
    public void deletegoodsinfo(@RequestBody Map<String,Object> params) {
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        GoodsInfo goodsInfo = gson.fromJson(gson.toJson(param),GoodsInfo.class);
        goodsInfoService.deleteGoodsInfo(goodsInfo);
    }

    /**
     * 添加指定商品
     * @param params
     */
    @ResponseBody
    @PostMapping("/addgoodsinfo")
    public void addgoodsinfo(@RequestBody Map<String,Object> params){
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        GoodsInfo goodsInfo = gson.fromJson(gson.toJson(param),GoodsInfo.class);
        goodsInfo.setGstate(0);
        goodsInfoService.saveGoodsInfo(goodsInfo);
    }

    /**
     * 更新指定商品信息
     * @param params
     */
    @ResponseBody
    @PostMapping("/updategoodsinfo")
    public void updategoodsinfo(@RequestBody Map<String,Object> params){
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        GoodsInfo goodsInfo = gson.fromJson(gson.toJson(param),GoodsInfo.class);
        goodsInfoService.saveGoodsInfo(goodsInfo);
    }

    /**
     * 获取所有商品信息
     * @return List<GoodsInfo>
     */
    @GetMapping(value = "/getnotcheckgoodsinfo")
    public List<GoodsInfo> getNotCheckGoodsInfo() {
        return goodsInfoService.getAllGoodsInfoByGstate(0);
    }

    /**
     * 更新商品状态
     * @param params
     */
    @ResponseBody
    @PostMapping("/postchecksign")
    public void postCheckSign(@RequestBody Map<String,Object> params){
        Map<String,Object> param = (Map<String,Object>)params.get("params");
        Integer sign = (Integer)params.get("sign");
        GoodsInfo goodsInfo = gson.fromJson(gson.toJson(param),GoodsInfo.class);
        goodsInfo.setGstate(sign);
        goodsInfoService.saveGoodsInfo(goodsInfo);
    }

    /**
     * 获取所有不合格商品信息
     * @return List<GoodsInfo>
     */
    @GetMapping(value = "/getcheckfailedgoodsinfo")
    public List<GoodsInfo> getCheckFailedGoodsInfo() {
        return goodsInfoService.getAllGoodsInfoByGstate(2);
    }

    /**
     * 获取所有商品信息
     * @return List<GoodsInfo>
     */
    @GetMapping(value = "/getallgoodstype")
    public List<GoodsType> getAllType() {
        return goodsTypeService.getAllGoodsTypeByTstate(1);
    }

    /**
     * 根据商品类型获取商品信息
     * @param typeid
     * @return List<GoodsInfo>
     */
    @GetMapping(value = "/getbytype")
    public List<GoodsInfo> getInfoByType(@RequestParam("typeid") int typeid) {
        System.out.println("++++++++++++++++++++++++++typeid = " + typeid);
        return goodsInfoService.findByType(typeid);
    }

    /**
     * 获取指定商品类型
     * @return GoodsType
     */
    @GetMapping(value = "/gettypebyid")
    public GoodsType getTypeById(@RequestParam("typeid") int typeid) {
        return goodsTypeService.getById(typeid);
    }

    @GetMapping(value = "/ischange")
    public Map<String,String> isChange(@RequestParam("username") String username,
                                       @RequestParam("goodsid") int goodsid) {
        Map<String, String> map = new HashMap<>();
        System.out.println("username= "+username);
        UserInfo userInfo = userInfoService.getUserInfoByUname(username);
        GoodsInfo goodsInfo = goodsInfoService.findById(goodsid);
        if(goodsInfo.getGuserid().equals(userInfo.getUserid())){
            map.put("result", "success");
        }else {
            map.put("result", "error");
        }
        return map;
    }
}
