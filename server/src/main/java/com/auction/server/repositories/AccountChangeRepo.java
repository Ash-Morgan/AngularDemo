package com.auction.server.repositories;

import com.auction.server.entities.AccountChange;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: AccountChange-Repository
*/
@Repository(value = "account-change-repo")
public interface AccountChangeRepo extends CrudRepository<AccountChange, String> {
}
