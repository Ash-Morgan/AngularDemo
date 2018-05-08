package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Entity
@Table(name = "auctioninfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class AuctionInfo {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "auctionid", length = 8, nullable = false)
    private Integer auctionid;

    @Column(name = "goodsid", length = 8, nullable = false)
    private Integer goodsid;

    @Column(name = "userid", length = 8, nullable = false)
    private Integer userid;

    @Column(name = "aaccount", nullable = false)
    private double aaccount;

    @Column(name = "aaddmoney", nullable = false)
    private double aaddmoney;

    @Column(name = "adatetime", length = 20, nullable = false)
    private String adatetime;

    @Column(name = "astate", length = 2, columnDefinition = "1")
    private Integer astate;

    public Integer getAuctionid() {
        return auctionid;
    }

    public void setAuctionid(Integer auctionid) {
        this.auctionid = auctionid;
    }

    public Integer getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(Integer goodsid) {
        this.goodsid = goodsid;
    }

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public double getAaccount() {
        return aaccount;
    }

    public void setAaccount(double aaccount) {
        this.aaccount = aaccount;
    }

    public double getAaddmoney() {
        return aaddmoney;
    }

    public void setAaddmoney(double aaddmoney) {
        this.aaddmoney = aaddmoney;
    }

    public String getAdatetime() {
        return adatetime;
    }

    public void setAdatetime(String adatetime) {
        this.adatetime = adatetime;
    }

    public Integer getAstate() {
        return astate;
    }

    public void setAstate(Integer astate) {
        this.astate = astate;
    }
}
