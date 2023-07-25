package com.deveng.projectmanager.controller;

import com.deveng.projectmanager.repository.mobmalrepo;
import com.deveng.projectmanager.model.mobmal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class mobmal_control {
    @Autowired
    private mobmalrepo mobmalREP;

    @GetMapping(value = "/get/mobmalware")
    public List<mobmal> getMobmal(){
        return mobmalREP.findAll();
    }

   @PostMapping(value = "/save/mobmalware")
    public String saveFirewall(@RequestBody mobmal policy){
        mobmalREP.save(policy);
        return "Saved....";
    }
    
    @PutMapping(value = "/update/mobmalware/{id}")
    public String updatemal(@PathVariable long id, @RequestBody mobmal policy){
        mobmal updatePolicy = mobmalREP.findById(id).get();
        updatePolicy.setVulnerability(policy.getVulnerability());
        updatePolicy.setUserCred(policy.getUserCred());
        updatePolicy.setIdInfo(policy.getIdInfo());
        updatePolicy.setLocInfo(policy.getLocInfo());
        mobmalREP.save(updatePolicy);
        return "Updated....";
    }
}
