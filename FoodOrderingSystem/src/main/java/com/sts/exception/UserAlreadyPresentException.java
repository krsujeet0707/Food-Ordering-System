package com.sts.exception;

public class UserAlreadyPresentException extends RuntimeException{
	
	private static final long serialVersionUID = 1L;
	
	public UserAlreadyPresentException(String message) 
	{
		super(message);
	}

}
