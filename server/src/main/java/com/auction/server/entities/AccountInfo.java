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
    private int accountid;

    @Column(name = "userid", length = 8, nullable = false)
    private int userid;


    @Column(name = "amount", nullable = false)
    private double amount;

    @Column(name = "astate", length = 2,columnDefinition = "1")
    private int astate;

    public int getAccountid() {
        return accountid;
    }

    public void setAccountid(int accountid) {
        this.accountid = accountid;
    }

    public int getUserid() {
        return userid;
    }

    public void setUserid(int userid) {
        this.userid = userid;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
    }

    public int getAstate() {
        return astate;
    }

    public void setAstate(int astate) {
        this.astate = astate;
    }
}
