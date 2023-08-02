package com.deveng.projectmanager.model;

import jakarta.persistence.*;

@Entity
public class mobmal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private boolean vulnerability;

    @Column
    private boolean userCred;

    @Column
    private boolean idInfo;

    @Column
    private boolean locInfo;

    @Column
    private String user;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }


    public void setUser(String user) {
        this.user = user;
    }

    public boolean isVulnerability() {
        return vulnerability;
    }

    public void setVulnerability(boolean vulnerability) {
        this.vulnerability = vulnerability;
    }

    public boolean isUserCred() {
        return userCred;
    }

    public void setUserCred(boolean userCred) {
        this.userCred = userCred;
    }

    public boolean isIdInfo() {
        return idInfo;
    }

    public void setIdInfo(boolean idInfo) {
        this.idInfo = idInfo;
    }

    public boolean isLocInfo() {
        return locInfo;
    }

    public String getUser(){
        return user;
    }

    public void setLocInfo(boolean locInfo) {
        this.locInfo = locInfo;
    }
}