package com.cts.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")


public class User {
	@Id
	private String username;
	  
	
	@Column(name="password",nullable=false,length=100)
	private String password;
	  @Override
	public String toString() {
		return "User [username=" + username + ", password=" + password + ", firstname=" + firstname + ", lastname="
				+ lastname + ", email=" + email + ", address=" + address + ", phone=" + phone + ", age=" + age + "]";
	}
	private String firstname;
	  private String lastname;
	  private String email;
	  private String address;
	  private Integer phone;
	  private Integer age;

	  public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getUsername() {
		  return username;
		  }
		  public void setUsername(String username) {
		  this.username = username;
		  }
		  public String getPassword() {
		  return password;
		  }
		  public void setPassword(String password) {
		  this.password = password;
		  }
		  public String getFirstname() {
		  return firstname;
		  }
		  public void setFirstname(String firstname) {
		  this.firstname = firstname;
		  }
		  public String getLastname() {
		  return lastname;
		  }
		  public void setLastname(String lastname) {
		  this.lastname = lastname;
		  }
		  public String getEmail() {
		  return email;
		  }
		  public void setEmail(String email) {
		  this.email = email;
		  }
		  public String getAddress() {
		  return address;
		  }
		  public void setAddress(String address) {
		  this.address = address;
		  }
		  public Integer getPhone() {
		  return phone;
		  }
		  public void setPhone(Integer phone) {
		  this.phone = phone;
		  }

}
