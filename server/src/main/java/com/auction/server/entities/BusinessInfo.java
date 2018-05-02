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
    private Integer businessid;

    @Column(name = "buyuserid", length = 8, nullable = false)
    private Integer buyuserid;

    @Column(name = "saleuserid", length = 8, nullable = false)
    private Integer saleuserid;

    @Column(name = "goodsid", length = 8, nullable = false)
    private Integer goodsid;

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
    private Integer bstate;

    public Integer getBusinessid() {
        return businessid;
    }

    public void setBusinessid(Integer businessid) {
        this.businessid = businessid;
    }

    public Integer getBuyuserid() {
        return buyuserid;
    }

    public void setBuyuserid(Integer buyuserid) {
        this.buyuserid = buyuserid;
    }

    public Integer getSaleuserid() {
        return saleuserid;
    }

    public void setSaleuserid(Integer saleuserid) {
        this.saleuserid = saleuserid;
    }

    public Integer getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(Integer goodsid) {
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

    public Integer getBstate() {
        return bstate;
    }

    public void setBstate(Integer bstate) {
        this.bstate = bstate;
    }
}
