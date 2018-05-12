package com.auction.server.repositories;

import com.auction.server.entities.AuctionInfo;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Repository(value = "auction-info-repo")
public interface AuctionInfoRepo  extends CrudRepository<AuctionInfo, String> {
    public Iterable<AuctionInfo> findFirst3ByGoodsidOrderByAaccountDesc(Integer goodsid);

    @Query(value = "select distinct a.goodsid from AuctionInfo a where a.userid = ?1")
    public List< Object> findGoodsidByUserid(Integer userid);
}
