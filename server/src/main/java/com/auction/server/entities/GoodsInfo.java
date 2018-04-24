package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


/*
    @Author:AshMorgan
    @Description: 关联数据库[goodsinfo]表的实体类
*/
@Entity
@Table(name = "goodsinfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class GoodsInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "goodsid", length = 8, nullable = false)
    private int goodsid;

    @Column(name = "guserid", length = 8, nullable = false)
    private int guserid;

    @Column(name = "gname", length = 32, nullable = false)
    private String gname;

    @Column(name = "gstartaccount", nullable = false)
    private double gstartaccount;

    @Column(name = "ghighaccount", nullable = false)
    private double ghighaccount;

    @Column(name = "gcontent", length = 128, nullable = false)
    private String gcontent;

    @Column(name = "gstartdate", length = 20, nullable = false)
    private String gstartdate;

    @Column(name = "genddate", length = 20, nullable = false)
    private String genddate;

    @Column(name = "goodstate", length = 10, nullable = false)
    private String goodstate;

    @Column(name = "gstate", length = 2,columnDefinition = "1")
    private int gstate;

    public int getGoodsid() {
        return goodsid;
    }

    public void setGoodsid(int goodsid) {
        this.goodsid = goodsid;
    }

    public int getGuserid() {
        return guserid;
    }

    public void setGuserid(int guserid) {
        this.guserid = guserid;
    }

    public String getGname() {
        return gname;
    }

    public void setGname(String gname) {
        this.gname = gname;
    }

    public double getGstartaccount() {
        return gstartaccount;
    }

    public void setGstartaccount(double gstartaccount) {
        this.gstartaccount = gstartaccount;
    }

    public double getGhighaccount() {
        return ghighaccount;
    }

    public void setGhighaccount(double ghighaccount) {
        this.ghighaccount = ghighaccount;
    }

    public String getGcontent() {
        return gcontent;
    }

    public void setGcontent(String gcontent) {
        this.gcontent = gcontent;
    }

    public String getGstartdate() {
        return gstartdate;
    }

    public void setGstartdate(String gstartdate) {
        this.gstartdate = gstartdate;
    }

    public String getGenddate() {
        return genddate;
    }

    public void setGenddate(String genddate) {
        this.genddate = genddate;
    }

    public String getGoodstate() {
        return goodstate;
    }

    public void setGoodstate(String goodstate) {
        this.goodstate = goodstate;
    }

    public int getGstate() {
        return gstate;
    }

    public void setGstate(int gstate) {
        this.gstate = gstate;
    }
}
