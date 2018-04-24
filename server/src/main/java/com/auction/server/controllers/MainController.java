package com.auction.server.controllers;



import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller(value = "/main")
public class MainController {
    @RequestMapping("/index")
    public String demo(){
        return "/index";
    }
}
