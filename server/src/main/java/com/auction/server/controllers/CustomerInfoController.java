package com.auction.server.controllers;

import com.auction.server.entities.CustomerInfo;
import com.auction.server.general.Cross;
import com.auction.server.services.CustomerInfoService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping(value = "/customer")
public class CustomerInfoController extends Cross {

    @Resource(name = "customer-info-service", type = CustomerInfoService.class)
    private CustomerInfoService customerInfoService;

    @GetMapping("/get")
    public CustomerInfo getCustomerInfo() {
        return customerInfoService.getCustomerInfo();
    }

    @ResponseBody
    @PostMapping("/post")
    public Map<String, String> postCustomerInfo(@RequestBody CustomerInfo customerInfo) {
        Map<String, String> map = new HashMap<>();
        CustomerInfo cus = customerInfoService.getCustomerInfoByCname(customerInfo.getCname());
        if (cus != null && cus.getCpwd().equals(customerInfo.getCpwd())) {
            System.out.println("校验成功！");
            map.put("result", "success");
        } else {
            System.out.println("未查询到数据！");
            map.put("result", "error");
        }
        return map;
    }
}
