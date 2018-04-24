package com.auction.server.services;

import com.auction.server.entities.CustomerInfo;
import com.auction.server.repositories.CustomerInfoRepo;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;

/*
    @Author:AshMorgan
    @Description: CustomerInfoService
*/
@Service(value = "customer-info-service")
public class CustomerInfoService {

    @Resource(name = "customer-info-repo", type = CustomerInfoRepo.class)
    private CustomerInfoRepo customerInfoRepo;

    public CustomerInfo getCustomerInfo() {
        CustomerInfo info = null;
        if (customerInfoRepo.findAll().iterator().hasNext()) {
            info = customerInfoRepo.findAll().iterator().next();
        }
        return info;
    }

    public CustomerInfo getCustomerInfoByCname(String cname){
        CustomerInfo info = null;
        if (customerInfoRepo.findCustomerInfoByCname(cname)!=null) {
            info = customerInfoRepo.findCustomerInfoByCname(cname);
        }
        return info;
    }

}
