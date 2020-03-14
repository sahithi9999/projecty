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

import com.cts.dao.SectorsRepository;
import com.cts.pojos.Ipos;
import com.cts.pojos.Sectors;




@RestController
@CrossOrigin(origins="*",allowedHeaders = "*") 
@RequestMapping("/sectors")
public class SectorsController  {
	@Autowired
	private SectorsRepository sectorsRepository;
	@GetMapping("/getAllSectors")
	public Iterable<Sectors> getAllSectors()
	{
		return sectorsRepository.findAll();
	}
	@PostMapping("/saveSectors")
	public Sectors saveSectors(@RequestBody Sectors sectors)
	{
		System.out.println(sectors);
		sectorsRepository.save(sectors);
		return sectors;
	}
	@PutMapping("/updateSectors/{id}")
	public Sectors updateSectors(@RequestBody Sectors sectors,@PathVariable("id") int id)
	{
		sectors.setId(id);
		System.out.println(sectors);
		sectorsRepository.save(sectors);
		
		return sectors;
	}
	@DeleteMapping("/deleteSectors/{id}")
	 public Boolean deleteSectors(@PathVariable("id") int id)
{
		//System.out.println(sectors);
	 sectorsRepository.deleteById(id);
     return true;
	 }
	@GetMapping("/findOneInAll3/{id}")



	 public Sectors findOneInAll3(@PathVariable("id") Integer id)
	 {
	 Optional<Sectors> sectors = sectorsRepository.findById(id);
   return sectors.get();
   }
	

}
