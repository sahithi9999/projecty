package com.cts.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.cts.ipos.Ipos;


public interface IposRepository extends CrudRepository <Ipos,Integer> {
	Iterable<Ipos> findAll();
	List<Ipos> findByCompanyName(String companyName);


}
