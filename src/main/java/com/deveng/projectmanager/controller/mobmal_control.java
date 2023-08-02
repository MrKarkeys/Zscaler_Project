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

    // @GetMapping(value = "/mobmalware")
    // public List<mobmal> getMobmal(){
    //     return mobmalREP.findAll();
    // }

    @GetMapping(value = "/mobmalware/{user}")
    public List<mobmal> getMobmal(@PathVariable String user) {
        return mobmalREP.findByUser(user);
    }

   @PostMapping(value = "/mobmalware/post")
    public mobmal saveFirewall(@RequestBody mobmal policy){
        return mobmalREP.save(policy);
    }
    
    @PutMapping(value = "/mobmalware/put/{user}")
    public String updatemal(@PathVariable String user, @RequestBody mobmal policy){
        mobmal updatePolicy = mobmalREP.findByUser(user).get(0);
        updatePolicy.setVulnerability(policy.isVulnerability());
        updatePolicy.setUserCred(policy.isUserCred());
        updatePolicy.setIdInfo(policy.isIdInfo());
        updatePolicy.setLocInfo(policy.isLocInfo());
        mobmalREP.save(updatePolicy);
        return "Updated....";
    }
}