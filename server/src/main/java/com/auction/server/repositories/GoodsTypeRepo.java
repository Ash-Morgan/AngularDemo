package com.auction.server.repositories;

import com.auction.server.entities.GoodsType;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: GoodsInfo-Repository
*/
@Repository(value = "goods-type-repo")
public interface GoodsTypeRepo extends CrudRepository<GoodsType, String> {
}
