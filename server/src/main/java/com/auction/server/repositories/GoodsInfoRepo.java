package com.auction.server.repositories;

import com.auction.server.entities.GoodsInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: GoodsInfo-Repository
*/
@Repository(value = "goods-info-repo")
public interface GoodsInfoRepo extends CrudRepository<GoodsInfo, String> {
    public Iterable<GoodsInfo> findAllByGstate(int gstate);

    public GoodsInfo findByGoodsid(int Goodsid);
}
