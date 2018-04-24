package com.auction.server.entities;

import lombok.AllArgsConstructor;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "customer")
@RequiredArgsConstructor
@AllArgsConstructor
public class CustomerInfo {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name = "cid", length = 8, nullable = false)
    private String cid;

    @Column(name = "cname", length = 8)
    private String cname;

    @Column(name = "cpwd", length = 8)
    private String cpwd;

    public String getCid() {
        return cid;
    }

    public void setCid(String cid) {
        this.cid = cid;
    }

    public String getCname() {
        return cname;
    }

    public void setCname(String cname) {
        this.cname = cname;
    }

    public String getCpwd() {
        return cpwd;
    }

    public void setCpwd(String cpwd) {
        this.cpwd = cpwd;
    }
}
