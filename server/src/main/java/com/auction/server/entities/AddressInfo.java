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
    private Integer addid;

    @Column(name = "userid", length = 8, nullable = false)
    private Integer userid;


    @Column(name = "address", length = 80, nullable = false)
    private String address;

    @Column(name = "astate", length = 2,columnDefinition = "1")
    private Integer astate;

    public Integer getAddid() {
        return addid;
    }

    public void setAddid(Integer addid) {
        this.addid = addid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Integer getAstate() {
        return astate;
    }

    public void setAstate(Integer astate) {
        this.astate = astate;
    }
}
