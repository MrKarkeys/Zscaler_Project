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
    private boolean usercred;

    @Column
    private boolean idinfo;

    @Column
    private boolean locinfo;

    public long getId(){
        return id;
    }
    public boolean getVulnerability(){
        return vulnerability;
    }
    public boolean getUserCred(){
        return usercred;
    }
    public boolean getIdInfo(){
        return idinfo;
    }
    public boolean getLocInfo(){
        return locinfo;
    }

    public void setId(long id){
        this.id = id;
    }
    public void setVulnerability(boolean vulnerability){
        this.vulnerability = vulnerability;
    }
    public void setUserCred(boolean usercred){
        this.usercred = usercred;
    }
    public void setIdInfo(boolean idinfo){
        this.idinfo = idinfo;
    }
    public void setLocInfo(boolean locinfo){
        this.locinfo = locinfo;
    }
}
