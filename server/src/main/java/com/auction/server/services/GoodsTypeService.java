package com.auction.server.services;

import com.auction.server.entities.GoodsType;
import com.auction.server.repositories.GoodsTypeRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "goods-type-service")
public class GoodsTypeService {
    @Resource(name = "goods-type-repo", type = GoodsTypeRepo.class)
    private GoodsTypeRepo goodsTypeRepo;

    /**
     * 根据商品类型状态获取所有商品信息
     *
     * @return List<GoodsType>
     */
    public List<GoodsType> getAllGoodsTypeByTstate(int tstate) {
        List<GoodsType> goodsTypeList = new ArrayList<GoodsType>();
        if (goodsTypeRepo.findAllByTstate(tstate).iterator().hasNext()) {
            goodsTypeList = (List<GoodsType>) goodsTypeRepo.findAllByTstate(tstate);
        }
        return goodsTypeList;
    }

    public GoodsType getById(int typeid) {
        return goodsTypeRepo.findByTypeid(typeid);
    }
}
