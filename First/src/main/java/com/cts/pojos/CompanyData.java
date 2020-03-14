package com.cts.pojos;

import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name="companydata")


public class CompanyData {
	@Id
	String companyName;
	String boardofDirectors;
	int listInStock;
	String sector;
	String briefWriteup;
	String stockCode;
	int turnOver;
	
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCeo() {
		return ceo;
	}
	public void setCeo(String ceo) {
		this.ceo = ceo;
	}
	public String getBoardofDirectors() {
		return boardofDirectors;
	}
	public void setBoardofDirectors(String boardofDirectors) {
		this.boardofDirectors = boardofDirectors;
	}
	public int getListInStock() {
		return listInStock;
	}
	public void setListInStock(int listInStock) {
		this.listInStock = listInStock;
	}
	public String getSector() {
		return sector;
	}
	public void setSector(String sector) {
		this.sector = sector;
	}
	public String getBriefWriteup() {
		return briefWriteup;
	}
	public void setBriefWriteup(String briefWriteup) {
		this.briefWriteup = briefWriteup;
	}
	public String getStockCode() {
		return stockCode;
	}
	public void setStockCode(String stockCode) {
		this.stockCode = stockCode;
	}
	public int getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(int turnOver) {
		this.turnOver = turnOver;
	}
	String ceo;
	@Override
	public String toString() {
		return "Companydata [companyName=" + companyName + ", ceo=" + ceo + ", boardofDirectors=" + boardofDirectors
				+ ", listInStock=" + listInStock + ", sector=" + sector + ", briefWriteup=" + briefWriteup
				+ ", stockCode=" + stockCode + ", turnOver=" + turnOver + "]";
	}
	
	
	
	

}
