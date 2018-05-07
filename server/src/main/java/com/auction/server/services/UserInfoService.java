package com.auction.server.services;

import com.auction.server.entities.UserInfo;
import com.auction.server.repositories.UserInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.ArrayList;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: UserInfoService
*/
@Service(value = "user-info-service")
public class UserInfoService {
    @Resource(name = "user-info-repo", type = UserInfoRepo.class)
    private UserInfoRepo userInfoRepo;

    /**
     * 获取所有用户信息
     * @return List<UserInfo>
     */
    public List<UserInfo> getAllUserInfoByUstate(int ustate) {
        List<UserInfo> userInfoList = new ArrayList<UserInfo>();
        if (userInfoRepo.findAllByUstate(ustate).iterator().hasNext()){
            userInfoList = (List<UserInfo>) userInfoRepo.findAllByUstate(ustate);
        }
        return userInfoList;
    }

    /**
     * 根据用户名获取指定用户信息
     * @return UserInfo
     */
    public UserInfo getUserInfoByUname(String username) {
        UserInfo userInfo = new UserInfo();
        if (userInfoRepo.findByUsername(username) != null){
            userInfo =  userInfoRepo.findByUsername(username);
        }
        return userInfo;
    }

    /**
     * 添加新用户
     * @param userInfo
     * @return
     */
    public UserInfo saveUserInfo(UserInfo userInfo){
        return userInfoRepo.save(userInfo);
    }

    /**
     * 删除指定商品
     * @param userInfo
     */
    public void deleteUserInfo(UserInfo userInfo){
        userInfoRepo.delete(userInfo);
    }

}
