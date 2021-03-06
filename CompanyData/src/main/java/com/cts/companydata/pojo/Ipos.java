package com.cts.companydata.pojo;



import java.util.Date;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="ipos")

public class Ipos {
	@Id
	Integer Id;
	
	String companyName;
	String stockExchange;
	Integer pricePershare;
	Integer totalNoofShares;
	String remarks;
	String opendatetime;

	@Override
	public String toString() {
		return "IPOs [Id=" + Id + ", companyName=" + companyName + ", stockExchange=" + stockExchange
				+ ", pricePershare=" + pricePershare + ", totalNoofShares=" + totalNoofShares + ", remarks=" + remarks
				+ ", opendatetime=" + opendatetime + "]";
	}
	public Integer getId() {
		return Id;
	}
	public void setId(Integer id) {
		Id = id;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getStockExchange() {
		return stockExchange;
	}
	public void setStockExchange(String stockExchange) {
		this.stockExchange = stockExchange;
	}
	public Integer getPricePershare() {
		return pricePershare;
	}
	public void setPricePershare(Integer pricePershare) {
		this.pricePershare = pricePershare;
	}
	public Integer getTotalNoofShares() {
		return totalNoofShares;
	}
	public void setTotalNoofShares(Integer totalNoofShares) {
		this.totalNoofShares = totalNoofShares;
	}
	public String getRemarks() {
		return remarks;
	}
	public void setRemarks(String remarks) {
		this.remarks = remarks;
	}
	public String getOpendatetime() {
		return opendatetime;
	}
	public void setOpendatetime(String opendatetime) {
		this.opendatetime = opendatetime;
	}
}
