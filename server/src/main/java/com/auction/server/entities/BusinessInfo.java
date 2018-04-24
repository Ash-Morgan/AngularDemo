package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


/*
    @Author:AshMorgan
    @Description: 关联数据库[businessinfo]表的实体类
*/
@Entity
@Table(name = "businessinfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class BusinessInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "businessid", length = 32, nullable = false)
    private int businessid;

    @Column(name = "buyuserid", length = 8, nullable = false)
    private int buyuserid;

    @Column(name = "saleuserid", length = 8, nullable = false)
    private int saleuserid;

    @Column(name = "goodsid", length = 8, nullable = false)
    private int goodsid;

    @Column(name = "bamount", nullable = false)
    private double bamount;

    @Column(name = "bdate", length = 20, nullable = false)
    private String bdate;

    @Column(name = "bcontent", length = 24, nullable = false)
    private String bcontent;

    @Column(name = "bclassify", length = 4, nullable = false)
    private String bclassify;

    @Column(name = "payway", length = 10, nullable = false)
    private String payway;

    @Column(name = "bstate", length = 2,columnDefinition = "1")
    private int bstate;

    public int getBusinessid() {
        return businessid;
    }

    public void setBusinessid(int businessid) {
        this.businessid = businessid;
    }

    public int getBuyuserid() {
        return buyuserid;
    }

    public void setBuyuserid(int buyuserid) {
        this.buyuserid = buyuserid;
    }

    public int getSaleuserid() {
        return saleuserid;
    }

    public void setSaleuserid(int saleuserid) {
        this.saleuserid = saleuserid;
    }

    public int getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(int goodsid) {
        this.goodsid = goodsid;
    }

    public double getBamount() {
        return bamount;
    }

    public void setBamount(double bamount) {
        this.bamount = bamount;
    }

    public String getBdate() {
        return bdate;
    }

    public void setBdate(String bdate) {
        this.bdate = bdate;
    }

    public String getBcontent() {
        return bcontent;
    }

    public void setBcontent(String bcontent) {
        this.bcontent = bcontent;
    }

    public String getBclassify() {
        return bclassify;
    }

    public void setBclassify(String bclassify) {
        this.bclassify = bclassify;
    }

    public String getPayway() {
        return payway;
    }

    public void setPayway(String payway) {
        this.payway = payway;
    }

    public int getBstate() {
        return bstate;
    }

    public void setBstate(int bstate) {
        this.bstate = bstate;
    }
}
