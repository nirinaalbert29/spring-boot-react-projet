package com.codewithAlain.fullstackbackendSpB.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.codewithAlain.fullstackbackendSpB.dto.CompteRequest;
import com.codewithAlain.fullstackbackendSpB.exception.CompteNotFoundException;
import com.codewithAlain.fullstackbackendSpB.model.Compte;
import com.codewithAlain.fullstackbackendSpB.model.User;
import com.codewithAlain.fullstackbackendSpB.repository.CompteRepository;
import com.codewithAlain.fullstackbackendSpB.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class CompteController {
	
	private final CompteRepository compteRepository;
    private final UserRepository userRepository;

    public CompteController(CompteRepository compteRepository, UserRepository userRepository) {
        this.compteRepository = compteRepository;
        this.userRepository = userRepository;
    }
	
	@GetMapping("/comptes")
	List<Compte> getAllcomptes(){
		return compteRepository.findAll();
	}
	
//	@PostMapping("/compte/add")
//    public ResponseEntity<Compte> createCompte(@RequestBody Compte compte) {
//        Compte savedCompte = compteRepository.save(compte);
//        return new ResponseEntity<>(savedCompte, HttpStatus.CREATED); 
//    }
	
	@PostMapping("/compte/add")
    public ResponseEntity<Compte> createCompte(@RequestBody CompteRequest compteRequest) {
        User user = userRepository.findById(compteRequest.getUserId())
                .orElseThrow(() -> new RuntimeException("Utilisateur non trouvé"));

        Compte compte = new Compte();
        compte.setCreatedAt(compteRequest.getCreatedAt());
        //compte.setCreatedAt(new Date());
        compte.setMdp(compteRequest.getMdp());
        compte.setPhoto(compteRequest.getPhoto());
        compte.setUser(user);

        Compte savedCompte = compteRepository.save(compte);
        return new ResponseEntity<>(savedCompte, HttpStatus.CREATED);
    }

	
	@GetMapping("/compte/{id}")
	Compte getCompteById(@RequestParam Integer id) {
		return compteRepository.findById(id).orElseThrow(()->new CompteNotFoundException(id));
	}
	
}
