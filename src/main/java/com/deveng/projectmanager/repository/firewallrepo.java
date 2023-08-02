package com.deveng.projectmanager.repository;

import com.deveng.projectmanager.model.firewall;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface firewallrepo extends JpaRepository<firewall, Long> {
    long countByUser(String user);

    List<firewall> findByUser(String user);
}
