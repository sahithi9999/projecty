package com.cts.pojos;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="user")

public class User {
	@Id
	Integer id;
	String email;
	Integer mobileNumber;
	String confirmed;
	String userName;
	String usertype;
	@Column(name="password",nullable=false,length=100)
	String password;
	public int
	getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getUsertype() {
		return usertype;
	}
	public void setUsertype(String usertype) {
		this.usertype = usertype;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public Integer getMobileNumber() {
		return mobileNumber;
	}
	public void setMobileNumber(Integer mobileNumber) {
		this.mobileNumber = mobileNumber;
	}
	public String getConfirmed() {
		return confirmed;
	}
	public void setConfirmed(String confirmed) {
		this.confirmed = confirmed;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	
	@Override
	public String toString() {
		return "User [id=" + id + ", password=" + password + ", usertype=" + usertype + ", email=" + email
				+ ", mobileNumber=" + mobileNumber + ", confirmed=" + confirmed + ", userName=" + userName + "]";
	}
	
	

}
