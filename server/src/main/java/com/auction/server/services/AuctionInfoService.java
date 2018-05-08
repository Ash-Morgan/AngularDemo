package com.auction.server.services;

import com.auction.server.entities.AuctionInfo;
import com.auction.server.repositories.AuctionInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "auction-info-service")
public class AuctionInfoService {
    @Resource(name = "auction-info-repo", type = AuctionInfoRepo.class)
    private AuctionInfoRepo auctionInfoRepo;

    public List<AuctionInfo> getTopFromAuction(Integer goodsid){
        return (List<AuctionInfo>)auctionInfoRepo.findFirst3ByGoodsidOrderByAaccountDesc(goodsid);
    }
}
