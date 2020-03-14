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

import com.cts.pojos.StockExchange;
import com.cts.pojos.StockPrice;

import com.cts.dao.StockPriceRepository;

@RestController
@CrossOrigin(origins="*",allowedHeaders = "*") 
@RequestMapping("/stockprice")
public class StockPriceController {
		@Autowired
		private StockPriceRepository stockpriceRepository;
		@GetMapping("/getAllStockprice")
		public Iterable<StockPrice> getAllStockprice()
		{
			return stockpriceRepository.findAll();
		}
		@PostMapping("/saveStockprice")
		public StockPrice saveStockprice(@RequestBody StockPrice stockprice)
		{
			System.out.println(stockprice);
			stockpriceRepository.save(stockprice);
			return stockprice;
		}
		@PutMapping("/updateStockprice/{companyCode}")
		public StockPrice updateStockprice(@RequestBody StockPrice stockprice,@PathVariable("companyCode") int companycode)
		{
			stockprice.setCompanyCode(companycode);
			System.out.println(stockprice);
			stockpriceRepository.save(stockprice);
			
			return stockprice;
		}
		@DeleteMapping("/deleteStockprice/{companyCode}")
		 public Boolean deleteStockprice( @PathVariable("companyCode") int companyCode)
	{
			//System.out.println(stockprice);
		 stockpriceRepository.deleteById(companyCode);
	     return true;
		 }
		@GetMapping("/findOneInAll5/{companyCode}")



		 public StockPrice findOneinAll5(@PathVariable("companyCode") Integer companyCode)
		 {
		 Optional<StockPrice> stockprice = stockpriceRepository.findById(companyCode);
        return stockprice.get();
        }
		

	}

