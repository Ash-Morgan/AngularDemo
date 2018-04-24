package com.auction.server.general;

/*
    Author:Administrator
    Time:2018/4/12 11:14
*/
public class  Detials {
    static private Detials instance;
    static{
        //线程安全
        instance = new Detials();
    }
    static public Detials getInstance(){
        return instance;
    }

    final static public String originUrl = "";
}
