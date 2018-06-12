package com.auction.server.services;

import com.auction.server.entities.AddressInfo;
import com.auction.server.repositories.AddressInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.List;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Service(value = "address-info-service")
public class AddressInfoService {
    @Resource(name = "address-info-repo", type = AddressInfoRepo.class)
    private AddressInfoRepo addressInfoRepo;

    public List<AddressInfo> getAllAddressInfo(Integer userid){
        return (List<AddressInfo>) addressInfoRepo.findByUserid(userid);
    }
}
