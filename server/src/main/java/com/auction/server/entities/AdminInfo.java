package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Entity
@Table(name = "admininfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class AdminInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "adminid", length = 8, nullable = false)
    private int adminid;

    @Column(name = "workid", length = 8, nullable = false)
    private String workid;

    @Column(name = "adminpwd", length = 20, nullable = false)
    private String adminpwd;

    @Column(name = "aname", length = 24, nullable = false)
    private String aname;

    @Column(name = "asex", length = 6, nullable = false)
    private String asex;

    @Column(name = "abirthdate", length = 10, nullable = false)
    private String abirthdate;

    @Column(name = "aphone", length = 11, nullable = false)
    private String aphone;

    @Column(name = "astate", length = 2, columnDefinition = "1")
    private int astate;

    public int getAdminid() {
        return adminid;
    }

    public void setAdminid(int adminid) {
        this.adminid = adminid;
    }

    public String getWorkid() {
        return workid;
    }

    public void setWorkid(String workid) {
        this.workid = workid;
    }

    public String getAdminpwd() {
        return adminpwd;
    }

    public void setAdminpwd(String adminpwd) {
        this.adminpwd = adminpwd;
    }

    public String getAname() {
        return aname;
    }

    public void setAname(String aname) {
        this.aname = aname;
    }

    public String getAsex() {
        return asex;
    }

    public void setAsex(String asex) {
        this.asex = asex;
    }

    public String getAbirthdate() {
        return abirthdate;
    }

    public void setAbirthdate(String abirthdate) {
        this.abirthdate = abirthdate;
    }

    public String getAphone() {
        return aphone;
    }

    public void setAphone(String aphone) {
        this.aphone = aphone;
    }

    public int getAstate() {
        return astate;
    }

    public void setAstate(int astate) {
        this.astate = astate;
    }
}
