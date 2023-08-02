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

    // @GetMapping(value = "/malware")
    // public List<mal> getMal(){
    //     return malREP.findAll();
    // }

    @GetMapping(value = "/malware/{user}")
    public List<mal> getMal(@PathVariable String user) {
        return malREP.findByUser(user);
    }

   @PostMapping(value = "/malware/post")
    public mal saveFirewall(@RequestBody mal policy){
        return malREP.save(policy);
    }
    
    @PutMapping(value = "/malware/put/{user}")
    public String updatemal(@PathVariable String user, @RequestBody mal policy){
        mal updatePolicy = malREP.findByUser(user).get(0);
        updatePolicy.setInboundTraffic(policy.isInboundTraffic());
        updatePolicy.setOutboundTraffic(policy.isOutboundTraffic());
        updatePolicy.setHttp(policy.isHttp());
        updatePolicy.setFtp(policy.isFtp());
        malREP.save(updatePolicy);
        return "Updated....";
    }
}