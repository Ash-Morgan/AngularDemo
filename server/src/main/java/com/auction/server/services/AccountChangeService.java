package com.auction.server.services;

import com.auction.server.entities.AccountChange;
import com.auction.server.repositories.AccountChangeRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "account-change-service")
public class AccountChangeService {
    @Resource(name = "account-change-repo", type = AccountChangeRepo.class)
    private AccountChangeRepo accountChangeRepo;

    public AccountChange save(AccountChange accountChange){
        return accountChangeRepo.save(accountChange);
    }

    public AccountChange getAccountChangeById(Integer changeid){
        return accountChangeRepo.findByChangeid(changeid);
    }

    public List<AccountChange> getAllAccountChangeByUserId(Integer userid){
        return (List<AccountChange>)accountChangeRepo.findByCuseridAndCstateNot(userid,2);
    }
}
