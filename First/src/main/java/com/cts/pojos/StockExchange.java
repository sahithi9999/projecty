package com.cts.pojos;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="stockexchange")

public class StockExchange {
	@Id
	int id;
	String brief;
	String contactAdress;
	String remarks;
	String stockExchange;

	@Override
	public String toString() {
		return "StockExchange [id=" + id + ", brief=" + brief + ", contactAdress=" + contactAdress + ", remarks="
				+ remarks + ", stockExchange=" + stockExchange + "]";
	}
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getBrief() {
		return brief;
	}
	public void setBrief(String brief) {
		this.brief = brief;
	}
	public String getContactAdress() {
		return contactAdress;
	}
	public void setContactAdress(String contactAdress) {
		this.contactAdress = contactAdress;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	

}
