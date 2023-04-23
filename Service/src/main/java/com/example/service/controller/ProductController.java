package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.repository.ProductRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping
public class ProductController {

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
        productRepository.save(product);
    }

    @DeleteMapping(path = "deleteProduct/{productId}")
    public void deleteProduct(@PathVariable("productId") Long productId) {
        productRepository.deleteById(productId);
    }

    @PutMapping(path = "editProduct/{productId}")
    public void updateProduct(@PathVariable(value = "productId") Long productId, @RequestBody Product newProduct) {
        Product product = productRepository.findById(productId).get();

        product.setName(newProduct.getName());
        product.setCategory(newProduct.getCategory());
        product.setLink(newProduct.getLink());
        product.setPrice(newProduct.getPrice());
        product.setDescription(newProduct.getDescription());

        productRepository.save(product);
    }
}
