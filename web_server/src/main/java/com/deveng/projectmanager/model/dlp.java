package com.deveng.projectmanager.model;

import jakarta.persistence.*;

@Entity
public class dlp {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    private boolean status;

    @Column
    private String name;

    @Column
    private String label;

    @Column
    private String DLP_Engine;

    @Column
    private String File_Type;

    @Column
    private String user;

    public boolean getStatus(){
        return status;
    }
    public String getName(){
        return name;
    }
    public String getLabel(){
        return label;
    }
    public String getDLP_Engine(){
        return DLP_Engine;
    }
    public String getFile_Type(){
        return File_Type;
    }
    public String getUser(){
        return user;
    }

    public void setStatus(boolean status){
        this.status = status;
    } 
    public void setName(String name){
        this.name = name;
    } 
    public void setLabel(String label){
        this.label = label;
    } 
    public void setDLP_Engine(String DLP_Engine){
        this.DLP_Engine = DLP_Engine;
    } 
    public void setFile_Type(String File_Type){
        this.File_Type = File_Type;
    } 
    public void setUser(String user){
        this.user = user;
    } 

}
