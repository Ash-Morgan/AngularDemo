package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


/*
    @Author:AshMorgan
    @Description: 关联数据库[accountinfo]表的实体类
*/
@Entity
@Table(name = "accountinfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class AccountInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "accountid", length = 8, nullable = false)
    private Integer accountid;

    @Column(name = "userid", length = 8, nullable = false)
    private Integer userid;


    @Column(name = "amount", nullable = false)
    private double amount;

    @Column(name = "astate", length = 2,columnDefinition = "1")
    private Integer astate;

    public Integer getAccountid() {
        return accountid;
    }

    public void setAccountid(Integer accountid) {
        this.accountid = accountid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public Integer getAstate() {
        return astate;
    }

    public void setAstate(Integer astate) {
        this.astate = astate;
    }
}
