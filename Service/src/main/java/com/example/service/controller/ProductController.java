package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.repository.ProductRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping
public class ProductController {
    public static void validateProduct(Product product) {
        if (Objects.equals(product.getName().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product name can not be empty");
        }

        if (Objects.equals(product.getLink().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product link can not be empty");
        }
        if (Objects.equals(product.getDescription().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product description can not be empty");
        }

        if (product.getPrice() < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Product price must be a number bigger than 0");
        }
    }

    ProductRepository productRepository;

    public ProductController(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @GetMapping(path = "/productList")
    public List<Product> getAllProduct() {
        return this.productRepository.findAll();
    }

    @PostMapping("newProduct")
    public void createProduct(@RequestBody Product product) {
        validateProduct(product);
        productRepository.save(product);
    }

    @DeleteMapping(path = "deleteProduct/{productId}")
    public void deleteProduct(@PathVariable("productId") Long productId) {
        productRepository.deleteById(productId);
    }

    @PutMapping(path = "editProduct/{productId}")
    public void updateProduct(@PathVariable(value = "productId") Long productId, @RequestBody Product newProduct) {
        Product product = productRepository.findById(productId).get();
        validateProduct(newProduct);
        product.setName(newProduct.getName());
        product.setCategory(newProduct.getCategory());
        product.setLink(newProduct.getLink());
        product.setPrice(newProduct.getPrice());
        product.setDescription(newProduct.getDescription());

        productRepository.save(product);
    }
}
