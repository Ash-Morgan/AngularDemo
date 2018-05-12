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

    /**
     *获取指定商品的前3个出价
     * @param goodsid
     * @return List<AuctionInfo>
     */
    public List<AuctionInfo> getTopFromAuction(Integer goodsid){
        return (List<AuctionInfo>)auctionInfoRepo.findFirst3ByGoodsidOrderByAaccountDesc(goodsid);
    }

    /**
     * 保存出价信息
     * @param auctionInfo
     * @return AuctionInfo
     */
    public AuctionInfo saveAuctionInfo(AuctionInfo auctionInfo){
        return auctionInfoRepo.save(auctionInfo);
    }

    public List< Object> getAuctionByUserid(Integer userid){
        if(auctionInfoRepo.findGoodsidByUserid(userid)!=null){
            return auctionInfoRepo.findGoodsidByUserid(userid);
        }
        return null;
    }
}
