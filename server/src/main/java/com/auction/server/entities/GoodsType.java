package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

/*
    @Author:AshMorgan
    @Description: TODO
*/
@Entity
@Table(name = "goodstype")
@RequiredArgsConstructor
@AllArgsConstructor
public class GoodsType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "typeid", length = 2, nullable = false)
    private Integer typeid;

    @Column(name = "tname", length = 20, nullable = false)
    private String tname;

    @Column(name = "tstate", length = 2,columnDefinition = "1")
    private Integer tstate;

    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
    }

    public String getTname() {
        return tname;
    }

    public void setTname(String tname) {
        this.tname = tname;
    }

    public Integer getTstate() {
        return tstate;
    }

    public void setTstate(Integer tstate) {
        this.tstate = tstate;
    }
}
