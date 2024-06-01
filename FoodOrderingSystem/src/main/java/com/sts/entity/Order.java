package com.sts.entity;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;


@Entity
@Table(name="food_order")
public class Order {
 
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "customerid")
	private int customerId;
	
	@Column(name = "customername")
	private String customerName;
	
	@Column(name = "quantity")
	private int quantity;

	@ManyToOne()
	@JoinColumn(name = "itemid", referencedColumnName = "id")
	private Items item;
	
	public Items getItem() {
		return item;
	}

	public void setItem(Items item) {
		this.item = item;
	}

	public int getCustomerId() {
		return customerId;
	}

	public void setCustomerId(int customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

//	public int getItemId() {
//		return itemId;
//	}
//
//	public void setItemId(int itemId) {
//		this.itemId = itemId;
//	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	
	
}
