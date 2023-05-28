package com.example.demo.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import com.example.demo.entity.Book;
import com.example.demo.entity.BookRepository;
import jakarta.annotation.Resource;

@RestController
@RequestMapping("/book")
public class BookController {
	@RequestMapping(method = RequestMethod.GET, value="/test")
	  @ResponseBody
	  public String test() {
		return "TEST";
	  }
	
    @Resource
    private BookRepository bookRepository;

    @GetMapping("/allbook")
    public @ResponseBody Iterable<Book> listbook() {
        return bookRepository.findAll();
    }
	
}