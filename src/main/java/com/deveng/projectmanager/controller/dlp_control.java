package com.deveng.projectmanager.controller;

import com.deveng.projectmanager.repository.dlprepo;
import com.deveng.projectmanager.model.dlp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
public class dlp_control {
    @Autowired
    private dlprepo dlpREP;

    /*
        API endpoints:
            GET - "/get/dlp" 
            SAVE - "/save/dlp"
            UPDATE - "/update/dlp/{id}"
            DELETE - "/delete/dlp/{id}"
    */
   
    // @GetMapping(value = "/get/dlp")
    // public List<dlp> getDLPPols(){
    //     return dlpREP.findAll();
    // }

    @GetMapping(value = "/dlp/{user}")
    public List<dlp> getDLPPols(@PathVariable String user) {
        return dlpREP.findByUser(user);
    }

    @PostMapping(value = "/dlp/post")
    public dlp saveDLP(@RequestBody dlp policy){
        return dlpREP.save(policy);
    }

    @PutMapping(value = "/dlp/put/{id}")
    public String updateDLP(@PathVariable long id, @RequestBody dlp policy){
        dlp updatedlp = dlpREP.findById(id).get();
        updatedlp.setStatus(policy.getStatus());
        updatedlp.setName(policy.getName());
        updatedlp.setLabel(policy.getLabel());
        updatedlp.setDlpEngine(policy.getDlpEngine());
        updatedlp.setFileType(policy.getFileType());
        updatedlp.setUser(policy.getUser());
        dlpREP.save(updatedlp);
        return "Updated....";
    }

    @DeleteMapping(value = "/dlp/delete/{id}")
    public String deleteDLP(@PathVariable long id){
        dlp deleteDLP = dlpREP.findById(id).get();
        dlpREP.delete(deleteDLP);
        return "Deleted " + id;
    }
}
