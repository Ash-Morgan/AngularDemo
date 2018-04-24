package com.auction.server.repositories;

import com.auction.server.entities.AddressInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: AddressInfo-Repository
*/
@Repository(value = "address-info-repo")
public interface AddressInfoRepo extends CrudRepository<AddressInfo, String> {
}
