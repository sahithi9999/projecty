package com.cts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cts.pojos.User;

import com.cts.dao.UserRepository;


@RestController
@RequestMapping("/users")
public class UserController {
	@Autowired
	private UserRepository userRepository;
	@GetMapping
	public Iterable<User> getAllUsers()
	{
		return userRepository.findAll();
	}
	@PostMapping
	public User saveUser(@RequestBody User user)
	{
		System.out.println(user);
		userRepository.save(user);
		return user;
	}
	@PutMapping("/updateUser/{username}")
	public User updateUser(@RequestBody User user,@PathVariable("username") String username)
	{
		user.setUsername(username);
		System.out.println(user);
		userRepository.save(user);
		
		return user;
	}
	

}
