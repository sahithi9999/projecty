package com.cts.companydata.pojo;

import javax.persistence.Id;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name="companydata")


public class CompanyData {
	
	@Id
	String companyName;
	String boardofDirectors;
	String listInStock;
	String sector;
	String briefWriteup;
	String stockCode;
	Integer turnOver;
	@Transient
	List<Ipos> iposlist;
	
	
	public List<Ipos> getIposlist() {
		return iposlist;
	}
	public void setIposlist(List<Ipos> iposlist) {
		this.iposlist = iposlist;
	}
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
	public String getListInStock() {
		return listInStock;
	}
	public void setListInStock(String listInStock) {
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
	public Integer getTurnOver() {
		return turnOver;
	}
	public void setTurnOver(Integer turnOver) {
		this.turnOver = turnOver;
	}
	String ceo;
	@Override
	public String toString() {
		return "Companydata [companyName=" + companyName + ", ceo=" + ceo + ", boardofDirectors=" + boardofDirectors
				+ ", listInStock=" + listInStock + ", sector=" + sector + ", briefWriteup=" + briefWriteup
				+ ", stockCode=" + stockCode + ",turnOver=" + turnOver + "]";
	}
	
	
	
	

}
