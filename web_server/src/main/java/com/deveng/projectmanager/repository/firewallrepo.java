package com.deveng.projectmanager.repository;

import com.deveng.projectmanager.model.firewall;
import org.springframework.data.jpa.repository.JpaRepository;

public interface firewallrepo extends JpaRepository<firewall, Long> {
    
}
