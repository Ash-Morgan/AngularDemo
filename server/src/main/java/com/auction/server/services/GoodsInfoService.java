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
     * 获取所有商品信息
     * @return List<GoodsInfo>
     */
    public List<GoodsInfo> getAllGoodsInfo() {
        List<GoodsInfo> goodsInfoList = new ArrayList<GoodsInfo>();
        if (goodsInfoRepo.findAll().iterator().hasNext()){
            goodsInfoList = (List<GoodsInfo>) goodsInfoRepo.findAll();
        }
        return goodsInfoList;
    }

    /**
     * 更新商品当前拍卖价格
     * @param info
     * @return GoodsInfo
     */
    public GoodsInfo updateHighAccount(GoodsInfo info){
        return goodsInfoRepo.save(info);
    }

    /**
     * 根据商品编号查询
     * @param id
     * @return GoodsInfo
     */
    public GoodsInfo findById(int id){
        return goodsInfoRepo.findByGoodsid(id);
    }
}
