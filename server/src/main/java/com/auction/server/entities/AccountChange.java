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
    private int changeid;

    @Column(name = "caccountid", length = 8, nullable = false)
    private int caccountid;

    @Column(name = "cuserid", length = 8, nullable = false)
    private int cuserid;

    @Column(name = "amount", nullable = false)
    private double amount;

    @Column(name = "cdate", length = 20, nullable = false)
    private String cdate;

    @Column(name = "ccontent", length = 24, nullable = false)
    private String ccontent;

    @Column(name = "cstate", length = 2,columnDefinition = "1")
    private int cstate;

    public int getChangeid() {
        return changeid;
    }

    public void setChangeid(int changeid) {
        this.changeid = changeid;
    }

    public int getCaccountid() {
        return caccountid;
    }

    public void setCaccountid(int caccountid) {
        this.caccountid = caccountid;
    }

    public int getCuserid() {
        return cuserid;
    }

    public void setCuserid(int cuserid) {
        this.cuserid = cuserid;
    }

    public double getAmount() {
        return amount;
    }

    public void setAmount(double amount) {
        this.amount = amount;
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

    public int getCstate() {
        return cstate;
    }

    public void setCstate(int cstate) {
        this.cstate = cstate;
    }
}
