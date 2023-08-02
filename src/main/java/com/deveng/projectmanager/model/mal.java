package com.deveng.projectmanager.model;

import jakarta.persistence.*;

@Entity
public class mal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private boolean inboundTraffic;

    @Column
    private boolean outboundTraffic;

    @Column
    private boolean http;

    @Column
    private boolean ftp;

    @Column
    private String user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
    
    public String getUser() {
        return user;
    }

    public boolean isInboundTraffic() {
        return inboundTraffic;
    }

    public void setInboundTraffic(boolean inboundTraffic) {
        this.inboundTraffic = inboundTraffic;
    }

    public boolean isOutboundTraffic() {
        return outboundTraffic;
    }

    public void setOutboundTraffic(boolean outboundTraffic) {
        this.outboundTraffic = outboundTraffic;
    }

    public boolean isHttp() {
        return http;
    }

    public void setHttp(boolean http) {
        this.http = http;
    }

    public boolean isFtp() {
        return ftp;
    }

    public void setFtp(boolean ftp) {
        this.ftp = ftp;
    }    


    public void setUser(String user){
        this.user = user;
    }
}