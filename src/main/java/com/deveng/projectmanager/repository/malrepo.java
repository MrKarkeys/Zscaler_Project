package com.deveng.projectmanager.repository;

import com.deveng.projectmanager.model.mal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface malrepo extends JpaRepository<mal, Long>{
    List<mal> findByUser(String user);
}
