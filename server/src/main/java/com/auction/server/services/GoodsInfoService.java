package com.auction.server.services;

import com.auction.server.entities.GoodsInfo;
import com.auction.server.repositories.GoodsInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "goods-info-service")
public class GoodsInfoService {
    @Resource(name = "goods-info-repo", type = GoodsInfoRepo.class)
    private GoodsInfoRepo goodsInfoRepo;

    /**
     * 根据商品状态获取所有商品信息
     *
     * @return List<GoodsInfo>
     */
    public List<GoodsInfo> getAllGoodsInfoByGstate(int gstate) {
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if (goodsInfoRepo.findAllByGstate(gstate).iterator().hasNext()) {
            goodsInfoList = (List<GoodsInfo>) goodsInfoRepo.findAllByGstate(gstate);
        }
        return goodsInfoList;
    }

    /**
     * 根据商品状态获取所有商品信息
     *
     * @return List<GoodsInfo>
     */
    public List<GoodsInfo> getGoodsInfoByGstateAndGuserid(int gstate,int userid) {
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if (goodsInfoRepo.findByGuseridAndGstate(gstate,userid).iterator().hasNext()) {
            goodsInfoList = (List<GoodsInfo>) goodsInfoRepo.findByGuseridAndGstate(gstate,userid);
        }
        return goodsInfoList;
    }

    /**
     * 根据商品状态获取所有商品信息
     * @return List<GoodsInfo>
     */
    public List<GoodsInfo> getAllGoodsInfoByGoodstate(String goodstate) {
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if (goodsInfoRepo.findAllByGoodstate(goodstate).iterator().hasNext()) {
            goodsInfoList = (List<GoodsInfo>) goodsInfoRepo.findAllByGoodstate(goodstate);
        }
        return goodsInfoList;
    }

    /**
     * 更新商品当前拍卖价格
     *
     * @param info
     * @return GoodsInfo
     */
    public GoodsInfo updateHighAccount(GoodsInfo info) {
        return goodsInfoRepo.save(info);
    }

    /**
     * 根据商品编号查询
     *
     * @param id
     * @return GoodsInfo
     */
    public GoodsInfo findById(int id) {
        return goodsInfoRepo.findByGoodsid(id);
    }

    /**
     * 删除指定商品
     * @param goodsInfo
     */
    public void deleteGoodsInfo(GoodsInfo goodsInfo){
        goodsInfoRepo.delete(goodsInfo);
    }

    /**
     * 保存指定商品
     * @param goodsInfo
     * @return GoodsInfo
     */
    public GoodsInfo saveGoodsInfo(GoodsInfo goodsInfo){
        return goodsInfoRepo.save(goodsInfo);
    }

    /**
     * 根据商品类型查询
     *
     * @param typeid
     * @return List<GoodsInfo>
     */
    public List<GoodsInfo> findByType(int typeid) {
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if (goodsInfoRepo.findAllByGtypeid(typeid).iterator().hasNext()) {
            goodsInfoList = (List<GoodsInfo>) goodsInfoRepo.findAllByGtypeid(typeid);
        }
        System.out.println(goodsInfoList.toString());
        return goodsInfoList;
    }
}
