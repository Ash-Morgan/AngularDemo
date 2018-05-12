package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


/*
    @Author:AshMorgan
    @Description: 关联数据库[accountchange]表的实体类
*/
@Entity
@Table(name = "accountchange")
@RequiredArgsConstructor
@AllArgsConstructor
public class AccountChange {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "changeid", length = 16, nullable = false)
    private Integer changeid;

    @Column(name = "caccountid", length = 8, nullable = false)
    private Integer caccountid;

    @Column(name = "cuserid", length = 8, nullable = false)
    private Integer cuserid;

    @Column(name = "camount", nullable = false)
    private double camount;

    @Column(name = "cdate", length = 20, nullable = false)
    private String cdate;

    @Column(name = "ccontent", length = 24, nullable = false)
    private String ccontent;

    @Column(name = "cstate", length = 2,columnDefinition = "1")
    private Integer cstate;

    public Integer getChangeid() {
        return changeid;
    }

    public void setChangeid(Integer changeid) {
        this.changeid = changeid;
    }

    public Integer getCaccountid() {
        return caccountid;
    }

    public void setCaccountid(Integer caccountid) {
        this.caccountid = caccountid;
    }

    public Integer getCuserid() {
        return cuserid;
    }

    public void setCuserid(Integer cuserid) {
        this.cuserid = cuserid;
    }

    public double getCamount() {
        return camount;
    }

    public void setCamount(double amount) {
        this.camount = amount;
    }

    public String getCdate() {
        return cdate;
    }

    public void setCdate(String cdate) {
        this.cdate = cdate;
    }

    public String getCcontent() {
        return ccontent;
    }

    public void setCcontent(String ccontent) {
        this.ccontent = ccontent;
    }

    public Integer getCstate() {
        return cstate;
    }

    public void setCstate(Integer cstate) {
        this.cstate = cstate;
    }
}
