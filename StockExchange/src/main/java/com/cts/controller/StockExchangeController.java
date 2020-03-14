package com.cts.controller;


import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cts.stockexchange.StockExchange;

import com.cts.dao.StockExchangeRepository;


@RestController
@CrossOrigin(origins="*",allowedHeaders = "*") 
@RequestMapping("/stockexchange")

public class StockExchangeController {

			@Autowired
			private StockExchangeRepository stockexchangeRepository;
			@GetMapping("/getAllStockexchange")
			public Iterable<StockExchange> getAllStockexchange()
			{
				return stockexchangeRepository.findAll();
			}
			@PostMapping("/saveStockexchange")
			public StockExchange saveStockExchange(@RequestBody StockExchange stockexchange)
			{
				System.out.println(stockexchange);
				stockexchangeRepository.save(stockexchange);
				return stockexchange;
			}
			@PutMapping("/updateStockexchange/{id}")
			public StockExchange updateStockexchange(@RequestBody StockExchange stockexchange,@PathVariable("id") int id)
			{
				stockexchange.setId(id);
				System.out.println(stockexchange);
				stockexchangeRepository.save(stockexchange);
				
				return stockexchange;
			}
			@DeleteMapping("/deleteStockexchange/{id}")
			 public Boolean deleteStockexchange(@PathVariable("id") int id)
		{
				//System.out.println(stockexchange);
			 stockexchangeRepository.deleteById(id);
		     return true;
			 }
			@GetMapping("/findOneInAll4/{id}")



			 public StockExchange findOneInAll4(@PathVariable("id") Integer id)
			 {
			 Optional<StockExchange> stockexchange = stockexchangeRepository.findById(id);
             return stockexchange.get();
             }
			

		}



