package com.cts.companydata.controller;


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
import com.cts.companydata.pojo.CompanyData;
import com.cts.companydata.JSONCompanyClient;
import com.cts.companydata.dao.CompanyDataRepository;


@RestController
@CrossOrigin(origins="*",allowedHeaders = "*")  
@RequestMapping("/companydata")  

public class CompanyDataController {
	@Autowired
	private CompanyDataRepository companydataRepository;
	@Autowired
	JSONCompanyClient jcompany;
	@GetMapping("/getAllCompanydata")
	public Iterable<CompanyData> getAllCompanydata()
	{
		return companydataRepository.findAll();
	}
	@PostMapping("/saveCompanydata")
	public CompanyData saveCompanydata(@RequestBody CompanyData companydata)
	{
		System.out.println(companydata);
	companydataRepository.save(companydata);
		return companydata;
	}
	@PutMapping("/updateCompanydata/{companyName}")
	public CompanyData updateCompanydata(@RequestBody CompanyData companydata,@PathVariable("companyName") String companyName)
	{
		companydata.setCompanyName(companyName);
		System.out.println(companydata);
		companydataRepository.save(companydata);
		
		return companydata;
	}
	@DeleteMapping("/deleteCompanydata/{companyName}")
	 public Boolean deleteCompanydata( @PathVariable("companyName") String companyName)
{
		//System.out.println(companyName);
	 companydataRepository.deleteById(companyName);
return true;
	 }
	@GetMapping("/findOneInAll1/{companyName}")



	 public CompanyData findOneInAll1(@PathVariable("companyName") String companyName)
	 {
	 Optional<CompanyData> companydata = companydataRepository.findById(companyName);
	 CompanyData comp=companydata.get();
	 comp.setIposlist(jcompany.findByCompanyName(companyName));
	 
    return companydata.get();
    }
}
