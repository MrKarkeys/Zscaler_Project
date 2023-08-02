package com.deveng.projectmanager.model;

import jakarta.persistence.*;

@Entity
public class firewall {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column
    private String name;

    @Column
    private String label;

    @Column
    private String department;

    @Column
    private String status;

    @Column
    private String user;
    
    public long getId(){
        return id;
    }
    public String getName(){
        return name;
    }
    public String getLabel(){
        return label;
    }
    public String getDepartment(){
        return department;
    }
    public String getStatus(){
        return status;
    }
    public String getUser(){
        return user;
    }

    public void setId(long id){
        this.id = id;
    }
    public void setName(String name){
        this.name = name;
    } 
    public void setLabel(String label){
        this.label = label;
    } 
    public void setDepartment(String department){
        this.department = department;
    } 
    public void setStatus(String status){
        this.status = status;
    } 
    public void setUser(String user){
        this.user = user;
    }
}