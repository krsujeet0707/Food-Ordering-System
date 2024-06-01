package com.sts.service;

import java.util.List;

import com.sts.entity.Items;
import com.sts.entity.Order;
import com.sts.entity.User;
import com.sts.model.OrderDAO;

public interface FoodOrderService {

	public int calculateBill(int CustomerId);

	public void addOrder(OrderDAO order);

	public Order fetchOrder(int customerid);
	
	public List<Order> deleteOrder(int customerid);

	public void updateOrder(int customerid, int quantity);

	public List<Order> fetchAllOrder();

	public List<Order> fetchOrderByCustomerNm(String customername);

	public List<Items> fetchAllItems();

	public User fetchUserDetail(String username);

	public void addUser(User user);
}
