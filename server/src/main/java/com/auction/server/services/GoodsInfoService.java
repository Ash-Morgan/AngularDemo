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
}
