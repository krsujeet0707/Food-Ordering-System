package com.sts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.entity.Order;
import com.sts.entity.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	User findByUserName(String username);
}
