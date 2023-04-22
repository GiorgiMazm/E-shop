package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.repository.ProductRepository;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
@RequestMapping
public class ProductController {

    ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping(path = "/productList")
    public List<Product> home() {
        return this.productRepository.findAll();
    }
}
