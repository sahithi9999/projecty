package com.cts.pojos;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="stockprice")

public class StockPrice {
@Id
 int companyCode;

int currentPrice;
String stockExchange;
String opendatetime;
 public int getCompanyCode() {
	return companyCode;
}

public void setCompanyCode(int companyCode) {
	this.companyCode = companyCode;
}

public String getStockExchange() {
	return stockExchange;
}

public void setStockExchange(String stockExchange) {
	this.stockExchange = stockExchange;
}

public int getCurrentPrice() {
	return currentPrice;
}

public void setCurrentPrice(int currentPrice) {
	this.currentPrice = currentPrice;
}

public String getOpendatetime() {
	return opendatetime;
}

public void setOpendatetime(String opendatetime) {
	this.opendatetime = opendatetime;
}



 @Override
public String toString() {
	return "StockPrice [companyCode=" + companyCode + ", stockExchange=" + stockExchange + ", currentPrice="
			+ currentPrice + ", opendatetime=" + opendatetime + "]";
}




 
}

