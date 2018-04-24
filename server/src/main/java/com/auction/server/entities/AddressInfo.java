package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


/*
    @Author:AshMorgan
    @Description: 关联数据库[addressinfo]表的实体类
*/
@Entity
@Table(name = "addressinfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class AddressInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "addid", length = 10, nullable = false)
    private int addid;

    @Column(name = "userid", length = 8, nullable = false)
    private int userid;


    @Column(name = "address", length = 80, nullable = false)
    private String address;

    @Column(name = "astate", length = 2,columnDefinition = "1")
    private int astate;

    public int getAddid() {
        return addid;
    }

    public void setAddid(int addid) {
        this.addid = addid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public int getAstate() {
        return astate;
    }

    public void setAstate(int astate) {
        this.astate = astate;
    }
}
