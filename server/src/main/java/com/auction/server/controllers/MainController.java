package com.auction.server.controllers;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.net.InetAddress;
import java.net.UnknownHostException;

@RestController
@RequestMapping(value = "/main")
public class MainController {


    @RequestMapping(value = "/hello",method = RequestMethod.GET)
    public String demo(){
        return "index";
    }

    @RequestMapping(value = "/getserverip",method = RequestMethod.GET)
    public String getServerIP(){
        InetAddress addr = null;
        try {
            addr = InetAddress.getLocalHost();
        } catch (UnknownHostException e) {
            e.printStackTrace();
        }
        System.out.println("Local HostAddress:"+addr.getHostAddress());
        String ipaddress = addr.getHostAddress();
        return ipaddress;
    }
}
