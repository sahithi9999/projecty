package com.cts.stockprice;
import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name="stockprice")

public class StockPrice {

@Id
private Integer sid;


String stockExchange;
String uploadfile;




public String getUploadfile() {
	return uploadfile;
}

public void setUploadfile(String uploadfile) {
	this.uploadfile = uploadfile;
}








public Integer getSid() {
	return sid;
}

public void setSid(Integer sid) {
	this.sid = sid;
}





String companyCode;








public String getCompanyCode() {
	return companyCode;
}

public void setCompanyCode(String companyCode) {
	this.companyCode = companyCode;
}






int currentPrice;
String date;
public String getDate() {
	return date;
}

public void setDate(String date) {
	this.date = date;
}

public String getTime() {
	return time;
}

public void setTime(String time) {
	this.time = time;
}





String time;
 





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





 @Override
public String toString() {
	return "StockPrice [stockExchange=" + stockExchange + ", uploadfile=" + uploadfile + ", sid=" + sid
			+ ", companyCode=" + companyCode + ", currentPrice=" + currentPrice + ", date=" + date + ", time=" + time
			+ "]";
}




 
}

