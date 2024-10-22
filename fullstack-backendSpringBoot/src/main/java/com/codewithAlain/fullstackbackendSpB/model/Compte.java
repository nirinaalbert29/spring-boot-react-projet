package com.codewithAlain.fullstackbackendSpB.model;

import java.util.Date;
import java.util.Objects;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "comptes")
public class Compte {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	
	private Date createdAt;
	private String mdp;
	@Column(columnDefinition = "TEXT")
	private  String photo;
	
	@ManyToOne
	private User user;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getCreatedAt() {
		return createdAt;
	}

	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}

	public String getMdp() {
		return mdp;
	}

	public void setMdp(String mdp) {
		this.mdp = mdp;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
//	 @Override
//	    public boolean equals(Object o) {
//	        if (this == o) return true;
//	        if (o == null || getClass() != o.getClass()) return false;
//	        User user = (User) o;
//	        return Objects.equals(id, user.getId());
//	    }
//
//	    @Override
//	    public int hashCode() {
//	        return Objects.hash(id);
//	    }
}
