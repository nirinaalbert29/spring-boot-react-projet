package com.codewithAlain.fullstackbackendSpB.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.codewithAlain.fullstackbackendSpB.model.Compte;

public interface CompteRepository extends JpaRepository<Compte, Integer>{

}
