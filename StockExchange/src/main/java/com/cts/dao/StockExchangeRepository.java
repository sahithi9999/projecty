package com.cts.dao;


import org.springframework.data.repository.CrudRepository;

import com.cts.stockexchange.StockExchange;


public interface StockExchangeRepository extends CrudRepository <StockExchange,Integer> {

	
}
