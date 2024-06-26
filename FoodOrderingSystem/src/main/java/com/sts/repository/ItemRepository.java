package com.sts.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sts.entity.Items;
import com.sts.entity.Order;
import com.sts.entity.User;

@Repository
public interface ItemRepository extends JpaRepository<Items, Integer> {

}
