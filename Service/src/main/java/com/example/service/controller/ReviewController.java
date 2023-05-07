package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.model.Review;
import com.example.service.model.User;
import com.example.service.repository.ProductRepository;
import com.example.service.repository.ReviewRepository;
import com.example.service.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;

@RestController
@RequestMapping
public class ReviewController {

    ReviewRepository reviewRepository;
    UserRepository userRepository;
    ProductRepository productRepository;

    public ReviewController(ReviewRepository reviewRepository, UserRepository userRepository, ProductRepository productRepository) {
        this.reviewRepository = reviewRepository;
        this.userRepository = userRepository;
        this.productRepository = productRepository;
    }

    @GetMapping(path = "/reviewList")
    public List<Review> getAllReview() {
        return this.reviewRepository.findAll();
    }

    @PostMapping("newReview")
    public void createReview(@RequestBody Review review) {
        User user = userRepository.findById(review.getUser().getId())
                .orElseThrow(() -> new RuntimeException("User not found"));

        Product product = productRepository.findById(review.getProduct().getId())
                .orElseThrow(() -> new RuntimeException("Product not found"));

        if (Objects.equals(review.getTitle().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Review title can not be empty");
        }

        if (Objects.equals(review.getDescription().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Review description can not be empty");
        }

        if (review.getRate() < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Review rate must be a number bigger than 0");
        }

        review.setUser(user);
        review.setProduct(product);

        reviewRepository.save(review);
    }

    @DeleteMapping(path = "deleteReview/{reviewId}")
    public void deleteReview(@PathVariable("reviewId") Long reviewId) {
        reviewRepository.deleteById(reviewId);
    }
}

