package com.auction.server.services;

import com.auction.server.entities.AdminInfo;
import com.auction.server.repositories.AdminInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "admin-info-service")
public class AdminInfoService {
    @Resource(name = "admin-info-repo", type = AdminInfoRepo.class)
    private AdminInfoRepo adminInfoRepo;

    /**
     * 根据工号获取指定用户信息
     * @return AdminInfo
     */
    public AdminInfo getAdminInfoByWorkId(String workid) {
        AdminInfo adminInfo = new AdminInfo();
        if (adminInfoRepo.findByWorkid(workid) != null){
            adminInfo =  adminInfoRepo.findByWorkid(workid);
        }
        return adminInfo;
    }
}
