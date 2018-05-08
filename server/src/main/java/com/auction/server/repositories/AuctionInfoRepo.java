package com.auction.server.repositories;

import com.auction.server.entities.AuctionInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Repository(value = "auction-info-repo")
public interface AuctionInfoRepo  extends CrudRepository<AuctionInfo, String> {
    public Iterable<AuctionInfo> findFirst3ByGoodsidOrderByAaccountDesc(Integer goodsid);
}
