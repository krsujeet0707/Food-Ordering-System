package com.sts.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sts.entity.Items;
import com.sts.entity.Order;
import com.sts.entity.User;
import com.sts.model.OrderDAO;
import com.sts.service.FoodOrderService;

@CrossOrigin()
@RestController
public class FoodOrderController {

	@Autowired
	FoodOrderService foodOrderService;
	
//	@GetMapping("/users/{email}")
//	public User getUserByEmail(@PathVariable("email") String email) {
//		return userService.getUserByEmail(email);
//	}
 
	@PostMapping(value="/addOrder")
	public void addFoodOrder(@RequestBody OrderDAO order)  {
		foodOrderService.addOrder(order);
	}
	
	@GetMapping(value="/getOrder")
	public List<Order> fetchAllFoodOrder()  {
		return foodOrderService.fetchAllOrder();
	}
	
	@GetMapping(value="/getUser/{username}")
	public User fetchUserDetail(@PathVariable("username") String username)  {
		return foodOrderService.fetchUserDetail(username);
	}
	
	@PostMapping(value="/addUser")
	public void addUser(@RequestBody User user)  {
		foodOrderService.addUser(user);
	}
	
	@GetMapping(value="/getItems")
	public List<Items> fetchAllItems()  {
		return foodOrderService.fetchAllItems();
	}
	
	@GetMapping(value="/getOrder/{customerid}")
	public Order fetchFoodOrder(@PathVariable("customerid") int customerid)  {
		System.out.println("custId:"+customerid);
		return foodOrderService.fetchOrder(customerid);
	}
	
	@GetMapping(value="/getOrderCustomerNm/{customername}")
	public List<Order> fetchFoodOrderByCustomerNm(@PathVariable("customername") String customername)  {
		return foodOrderService.fetchOrderByCustomerNm(customername);
	}
	
	@DeleteMapping(value="/deleteOrder/{customerid}")
	public List<Order> deleteOrder(@PathVariable("customerid") int customerid) {
		System.out.println("custId:"+customerid);
		return foodOrderService.deleteOrder(customerid);
	}
	
	@PutMapping(value="/updateOrder/{customerid}/{quantity}")
	public void updateOrder(@PathVariable("customerid") int customerid, @PathVariable("quantity") int quantity) {
		
	}
	}
//	@GetMapping("/total-amount/{id}")
//	public int calculateAmount(int customerId){
//		
//	} 
//	
//	@GetMapping("/total-amount/{id}")
//	public int getAllOrders(int customerId){
//		
//	}

