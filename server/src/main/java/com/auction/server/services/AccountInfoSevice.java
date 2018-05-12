package com.auction.server.services;

import com.auction.server.entities.AccountInfo;
import com.auction.server.repositories.AccountInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "account-info-service")
public class AccountInfoSevice {
    @Resource(name = "account-info-repo", type = AccountInfoRepo.class)
    private AccountInfoRepo accountInfoRepo;

    /**
     * 根据商品编号查询
     * @param id
     * @return AccountInfo
     */
    public AccountInfo findByUserId(int id){
        return accountInfoRepo.findByUserid(id);
    }

    public AccountInfo save(AccountInfo accountInfo){
        return accountInfoRepo.save(accountInfo);
    }
}
