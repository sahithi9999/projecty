package com.cts.controller;



import java.util.List;
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

import com.cts.dao.IposRepository;
import com.cts.ipos.Ipos;



@RestController
@CrossOrigin(origins="*",allowedHeaders = "*") 
@RequestMapping("/ipos")

public class IposController {
	@Autowired
	private IposRepository iPOsRepository;
	@GetMapping("/getAllIpos")
	public Iterable<Ipos> getAllIpos()
	{
		return iPOsRepository.findAll();
	}
	@PostMapping("/saveIpos")
	public Ipos saveIPOs(@RequestBody Ipos iPOs)
	{
		System.out.println(iPOs);
	iPOsRepository.save(iPOs);
		return iPOs;
	}
	@PutMapping("/updateIpos/{id}")
	public Ipos updateIPOs(@RequestBody Ipos iPOs,@PathVariable("id") Integer id)
	{
		iPOs.setId(id);
		System.out.println(iPOs);
		iPOsRepository.save(iPOs);
		
		return iPOs;
	}
	@DeleteMapping("/deleteIpos/{id}")
	 public Boolean deleteIPOs( @PathVariable("id") Integer id)
{
		//System.out.println(iPOs);
	 iPOsRepository.deleteById(id);
return true;
	 }
	@GetMapping("/findOneInAll2/{id}")



	 public Ipos findOneInAll2(@PathVariable("id") Integer id)
	 {
	 Optional<Ipos> iPOs = iPOsRepository.findById(id);
    return iPOs.get();
    }
	@GetMapping("/findByCompanyName/{companyName}")

	 public List<Ipos> findByCompanyName(@PathVariable("companyName") String companyName)

	 {

	 List<Ipos> ipos = iPOsRepository.findByCompanyName(companyName);

	 return ipos;


	 }







}
