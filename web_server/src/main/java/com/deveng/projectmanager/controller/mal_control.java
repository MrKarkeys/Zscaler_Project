package com.deveng.projectmanager.controller;

import com.deveng.projectmanager.repository.malrepo;
import com.deveng.projectmanager.model.mal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class mal_control {
    @Autowired
    private malrepo malREP;

    @GetMapping(value = "/get/malware")
    public List<mal> getMal(){
        return malREP.findAll();
    }

   @PostMapping(value = "/save/malware")
    public String saveFirewall(@RequestBody mal policy){
        malREP.save(policy);
        return "Saved....";
    }
    
    @PutMapping(value = "/update/malware/{id}")
    public String updatemal(@PathVariable long id, @RequestBody mal policy){
        mal updatePolicy = malREP.findById(id).get();
        updatePolicy.setInbound_Traffic(policy.getInbound_Traffic());
        updatePolicy.setOutbound_Traffic(policy.getOutbound_Traffic());
        updatePolicy.setHttp(policy.getHttp());
        updatePolicy.setFtp(policy.getFtp());
        malREP.save(updatePolicy);
        return "Updated....";
    }
}
