package com.sts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.entity.Order;

@Repository
public interface FoodOrderRepository extends JpaRepository<Order, Integer> {

	Order findByCustomerId(int customerid);

	List<Order> deleteByCustomerId(int customerid);

	List<Order> findByCustomerName(String customername);

	List<Order> findAllByOrderByCustomerIdDesc();

}
