package com.auction.server.repositories;

import com.auction.server.entities.UserInfo;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/*
    @Author:AshMorgan
    @Description: UserInfo-Repository
*/
@Repository(value = "user-info-repo")
public interface UserInfoRepo extends CrudRepository<UserInfo, String> {
    public UserInfo findByUsername(String username);
}
