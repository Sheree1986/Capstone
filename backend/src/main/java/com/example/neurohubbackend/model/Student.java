package com.example.neurohubbackend.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Entity
@Table(name="students")


public class Student {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "first_name", nullable = false) 
	private String firstName;
	
	@Column(name = "last_name") 
	private String lastName;
	
	@Column(name = "email") 	
	private String email;
	
	@Column(name = "accommodation1") 	
	private String accommodation1;
	
	@Column(name = "accommodation2") 	
	private String accommodation2;
	
	@Column(name = "accommodation3")	
	private String accommodation3;
	
	

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	

	public String getAccommodation1() {
		return accommodation1;
	}

	public void setAccommodation1(String accommodation1) {
		this.accommodation1 = accommodation1;
	}

	public String getAccommodation2() {
		return accommodation2;
	}

	public void setAccommodation2(String accommodation2) {
		this.accommodation2 = accommodation2;
	}

	public String getAccommodation3() {
		return accommodation3;
	}

	public void setAccommodation3(String accommodation3) {
		this.accommodation3 = accommodation3;
	}


	public Student(long id, String firstName, String lastName, String email, String accommodation1,
			String accommodation2, String accommodation3) {
		super();
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
		this.email = email;
		this.accommodation1 = accommodation1;
		this.accommodation2 = accommodation2;
		this.accommodation3 = accommodation3;
	}


	public Student() {
		
	
}
}
