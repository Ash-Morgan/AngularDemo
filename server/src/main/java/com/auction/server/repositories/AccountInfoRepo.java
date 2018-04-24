package com.auction.server.repositories;

import com.auction.server.entities.AccountInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: AccountInfo-Repository
*/
@Repository(value = "account-info-repo")
public interface AccountInfoRepo extends CrudRepository<AccountInfo, String> {
}
