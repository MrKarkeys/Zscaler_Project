package com.deveng.projectmanager.model;

import jakarta.persistence.*;

@Entity
public class mal {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private boolean inbound_traffic;

    @Column
    private boolean outbound_traffic;

    @Column
    private boolean http;

    @Column
    private boolean ftp;

    public long getId(){
        return id;
    }
    public boolean getInbound_Traffic(){
        return inbound_traffic;
    }
    public boolean getOutbound_Traffic(){
        return outbound_traffic;
    }
    public boolean getHttp(){
        return http;
    }
    public boolean getFtp(){
        return ftp;
    }

    public void setId(long id){
        this.id = id;
    }
    public void setInbound_Traffic(boolean inbound_traffic){
        this.inbound_traffic = inbound_traffic;
    }
    public void setOutbound_Traffic(boolean outbound_traffic){
        this.outbound_traffic = outbound_traffic;
    }
    public void setHttp(boolean http){
        this.http = http;
    }
    public void setFtp(boolean ftp){
        this.ftp = ftp;
    }
}
