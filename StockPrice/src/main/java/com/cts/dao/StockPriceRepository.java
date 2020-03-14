package com.cts.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.cts.stockprice.StockPrice;


public interface StockPriceRepository  extends CrudRepository <StockPrice,Integer> {


	Optional<StockPrice> findBySid(Integer sid);

	void deleteBySid(Integer sid);


	

	
}
