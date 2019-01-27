package com.example.project.model;

import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.SequenceGenerator;

@Entity
@Table(name = "USERINFO")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
	private Long userid;
    
    @Column(name = "Name")
    private String name;

	public Long getId() {
        return userid;
    }

    public void setId(Long userid) {
        this.userid = userid;
	}

    public User Name(String name){
		this.name = name;
		return this;
	}

    @Override
    public String toString() {return "Geldi";}
}