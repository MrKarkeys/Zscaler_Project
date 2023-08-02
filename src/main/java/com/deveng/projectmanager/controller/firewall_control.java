package com.deveng.projectmanager.controller;

import com.deveng.projectmanager.repository.firewallrepo;
import com.deveng.projectmanager.model.firewall;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;


@RestController
public class firewall_control {
    @Autowired
    private firewallrepo firewallREP;

    // "/get/firewall" is the api endpoint
    // 

    // @GetMapping(value="/info/firewall/{user}")
    // public long countByUser(@PathVariable String user){
    //     long count = firewallREP.countByUser(user);
    //     return count;
    // }
    
    // @GetMapping(value = "/get/firewall")
    // public List<firewall> getFirewallPols(){
    //     return firewallREP.findAll();
    // }

    @GetMapping(value = "/firewall/{user}")
    public List<firewall> getFirewallPols(@PathVariable String user) {
        return firewallREP.findByUser(user);
    }

    /*
        "/save/firewall" is the api endpoint
        "firewall" is a class type (as seen in firewall.java) and its essentially the class that has the 
        data table. So, we can think of firewall policy table as type "firewall". So, we create a 
        an instance of the firewall class called policy, and this directly refers to the firewall policy table
    */
    
    //.save will generate an ID  
    @PostMapping(value = "/firewall/post")
    public firewall saveFirewall(@RequestBody firewall policy){
        return firewallREP.save(policy);
    }
    
    //"/update/firewall/{id}" is the api endpoint
    @PutMapping(value = "/firewall/put/{id}")
    public String updateFirewall(@PathVariable long id, @RequestBody firewall policy){
        firewall updatefirewall = firewallREP.findById(id).get();
        updatefirewall.setName(policy.getName());
        updatefirewall.setLabel(policy.getLabel());
        updatefirewall.setDepartment(policy.getDepartment());
        updatefirewall.setStatus(policy.getStatus());
        updatefirewall.setUser(policy.getUser());
        firewallREP.save(updatefirewall);
        return "Updated....";
    }

    @DeleteMapping(value = "/firewall/delete/{id}")
    public String deleteFirewall(@PathVariable long id){
        firewall deleteFirewall = firewallREP.findById(id).get();
        firewallREP.delete(deleteFirewall);
        return "Deleted " + id;
    }
    
    
}
