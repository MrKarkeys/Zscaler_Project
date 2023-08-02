package com.deveng.projectmanager.repository;

import com.deveng.projectmanager.model.mobmal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface mobmalrepo extends JpaRepository<mobmal, Long>{
    List<mobmal> findByUser(String user);
}
