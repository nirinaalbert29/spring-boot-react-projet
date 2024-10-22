package com.codewithAlain.fullstackbackendSpB.exception;

public class CompteNotFoundException extends RuntimeException {
	public CompteNotFoundException(Integer id) {
		super("Le Compte qui a l'Id "+id+" n'existe pas");
	}
}
