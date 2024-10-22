package com.codewithAlain.fullstackbackendSpB.controller;

import java.util.List; 


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.codewithAlain.fullstackbackendSpB.exception.UserNotFoundException;
import com.codewithAlain.fullstackbackendSpB.model.User;
import com.codewithAlain.fullstackbackendSpB.repository.UserRepository;

@RestController
@CrossOrigin("http://localhost:3000")
public class UserController {
	
	@Autowired
	private UserRepository userrepo;
	
	@PostMapping("/user")
	User newUser(@RequestBody User newUser) {
		return userrepo.save(newUser);
	}
	
	@GetMapping("/users")
	List<User> getAllUsers(){
		return userrepo.findAll();
	}
	
	@GetMapping("/user/{id}")
	User getUserById(@PathVariable Integer id ) {
		return userrepo.findById(id).orElseThrow(()->new UserNotFoundException(id));
	}
	
	@PutMapping("/update/{id}")
	User update(@RequestBody User newUser,@PathVariable Integer id) {
		return userrepo.findById(id)
				.map(user->{
					user.setNom(newUser.getNom());
					user.setUsername(newUser.getUsername());
					user.setEmail(newUser.getEmail());
					return userrepo.save(user);
				}).orElseThrow(() -> new UserNotFoundException(id));
	}
	
	@DeleteMapping("/delete/{id}")
	String deleteUser(@PathVariable Integer id) {
		if(!userrepo.existsById(id)) {
			throw new UserNotFoundException(id);
		}
		userrepo.deleteById(id);
		return " user qui a l'Id "+id+" a été supprimé avec succé";
	}
	@GetMapping("/user/email/{email}")
	User getUserByEmail(@PathVariable String email) {
		return userrepo.findByEmail(email).orElseThrow(()->new UserNotFoundException(email));
	}
	
}
