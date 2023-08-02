package com.deveng.projectmanager.repository;

import com.deveng.projectmanager.model.dlp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
public interface dlprepo extends JpaRepository<dlp, Long>{
    
    List<dlp> findByUser(String user);

}
