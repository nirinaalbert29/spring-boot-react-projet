package com.codewithAlain.fullstackbackendSpB.exception;

public class UserNotFoundException extends RuntimeException{
	private static final long serialVersionUID = 1L;

	public UserNotFoundException(Integer id) {
		super("Il n'existe pas cet user qui a de l'Id = "+id);
	}
	public UserNotFoundException(String email) {
		super("Il n'existe pas cet user qui a de l'email = "+email);
	}
}
