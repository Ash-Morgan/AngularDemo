package com.auction.server.repositories;

import com.auction.server.entities.BusinessInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: BusinessInfo-Repository
*/
@Repository(value = "business-info-repo")
public interface BusinessInfoRepo extends CrudRepository<BusinessInfo, String> {
    public BusinessInfo findByGoodsid(int goodsid);
}
