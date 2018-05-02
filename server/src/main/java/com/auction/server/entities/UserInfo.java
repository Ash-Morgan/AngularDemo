package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;


/*
    @Author:AshMorgan
    @Description: 关联数据库[userinfo]表的实体类
*/
@Entity
@Table(name = "userinfo")
@RequiredArgsConstructor
@AllArgsConstructor
public class UserInfo {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid", length = 8, nullable = false)
    private Integer userid;

    @Column(name = "username", length = 24, nullable = false)
    private String username;

    @Column(name = "userpwd", length = 20, nullable = false)
    private String userpwd;

    @Column(name = "uname", length = 24, nullable = false)
    private String uname;

    @Column(name = "usex", length = 6, nullable = false)
    private String usex;

    @Column(name = "ucardid", length = 18, nullable = false)
    private String ucardid;

    @Column(name = "ubirthdate", length = 10, nullable = false)
    private String ubirthdate;

    @Column(name = "uphone", length = 11, nullable = false)
    private String uphone;

    @Column(name = "ustate", length = 2, columnDefinition = "1")
    private Integer ustate;

    public Integer getUserid() {
        return userid;
    }

    public void setUserid(Integer userid) {
        this.userid = userid;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getUserpwd() {
        return userpwd;
    }

    public void setUserpwd(String userpwd) {
        this.userpwd = userpwd;
    }

    public String getUname() {
        return uname;
    }

    public void setUname(String uname) {
        this.uname = uname;
    }

    public String getUsex() {
        return usex;
    }

    public void setUsex(String usex) {
        this.usex = usex;
    }

    public String getUcardid() {
        return ucardid;
    }

    public void setUcardid(String ucardid) {
        this.ucardid = ucardid;
    }

    public String getUbirthdate() {
        return ubirthdate;
    }

    public void setUbirthdate(String ubirthdate) {
        this.ubirthdate = ubirthdate;
    }

    public String getUphone() {
        return uphone;
    }

    public void setUphone(String uphone) {
        this.uphone = uphone;
    }

    public Integer getUstate() {
        return ustate;
    }

    public void setUstate(Integer ustate) {
        this.ustate = ustate;
    }
}
