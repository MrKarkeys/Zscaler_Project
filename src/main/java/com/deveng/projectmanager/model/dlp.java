package com.deveng.projectmanager.model;

import jakarta.persistence.*;

@Entity
public class dlp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private String status;

    @Column
    private String name;

    @Column
    private String label;

    @Column
    private String dlpEngine;

    @Column
    private String fileType;

    @Column
    private String user;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLabel() {
        return label;
    }

    public void setLabel(String label) {
        this.label = label;
    }

    public String getDlpEngine() {
        return dlpEngine;
    }

    public void setDlpEngine(String dlpEngine) {
        this.dlpEngine = dlpEngine;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public String getUser() {
        return user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    
}