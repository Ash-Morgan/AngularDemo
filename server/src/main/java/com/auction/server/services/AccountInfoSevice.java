package com.auction.server.services;

import com.auction.server.entities.AccountInfo;
import com.auction.server.entities.UserInfo;
import com.auction.server.repositories.AccountInfoRepo;
import com.auction.server.repositories.UserInfoRepo;
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

    @Resource(name = "user-info-repo", type = UserInfoRepo.class)
    private UserInfoRepo userInfoRepo;
    /**
     * 根据商品编号查询
     * @param username
     * @return AccountInfo
     */
    public AccountInfo findByUserName(String username){
        UserInfo userinfo = userInfoRepo.findByUsername(username);
        return accountInfoRepo.findByUserid(userinfo.getUserid());
    }
}
