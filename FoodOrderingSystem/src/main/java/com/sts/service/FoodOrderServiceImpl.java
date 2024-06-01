package com.sts.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Service;
import org.springframework.util.ObjectUtils;

import com.sts.entity.Items;
import com.sts.entity.Order;
import com.sts.entity.User;
import com.sts.exception.UserAlreadyPresentException;
import com.sts.model.OrderDAO;
import com.sts.repository.FoodOrderRepository;
import com.sts.repository.ItemRepository;
import com.sts.repository.UserRepository;

import jakarta.transaction.Transactional;

@Service
public class FoodOrderServiceImpl implements FoodOrderService {

	@Autowired
	FoodOrderRepository foodOrderRepository;

	@Autowired
	ItemRepository itemRepository;
	
	@Autowired
	UserRepository userRepository;
	
	@Override
	public int calculateBill(int CustomerId) {
		
		return 0;
	}

	@Override
	public void addOrder(OrderDAO order) {
		Items item= itemRepository.findById(order.getItemId()).get();
				
				Order order1= new Order();
				order1.setCustomerName(order.getCustomerName());
				order1.setQuantity(order.getQuantity());
				order1.setItem(item);
		
		foodOrderRepository.save(order1);
	}

	@Override
	public Order fetchOrder(int customerid) {
		return foodOrderRepository.findByCustomerId(customerid);
	}
	
	@Transactional
	public List<Order> deleteOrder(int customerid) {
		return foodOrderRepository.deleteByCustomerId(customerid);
	}
	
	@Modifying
	public void updateOrder(int customerid, int quantity) {
//		Order customerOrder=fetchOrder(customerid);
//		customerOrder.setQuantity(quantity);
//		addOrder(customerOrder);
		
	}

	@Override
	public List<Order> fetchAllOrder() {
		return foodOrderRepository.findAllByOrderByCustomerIdDesc();
	}

	@Override
	public List<Order> fetchOrderByCustomerNm(String customername) {
		return foodOrderRepository.findByCustomerName(customername);
	}

	@Override
	public List<Items> fetchAllItems() {
		return itemRepository.findAll();
	}

	@Override
	public User fetchUserDetail(String username) {
		return userRepository.findByUserName(username);
	}

	@Override
	public void addUser(User user) {
		User user1=userRepository.findByUserName(user.getUserName());
		System.out.println(user.toString());
		System.out.println(user.getUserName());
		if(!ObjectUtils.isEmpty(user)&& (ObjectUtils.isEmpty(user.getUserName())||ObjectUtils.isEmpty(user.getPassword())||ObjectUtils.isEmpty(user.getCustomerName()) ) ) {
			throw new UserAlreadyPresentException("Please complete the form data");
		}
		
		if(user1!=null) {
			throw new UserAlreadyPresentException("UserId is already in use");
		}
		userRepository.save(user);
		
	}
}
