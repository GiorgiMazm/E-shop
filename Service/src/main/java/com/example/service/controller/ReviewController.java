package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.model.Review;
import com.example.service.model.User;
import com.example.service.repository.ProductRepository;
import com.example.service.repository.ReviewRepository;
import com.example.service.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

        review.setUser(user);
        review.setProduct(product);

        reviewRepository.save(review);
    }

    @DeleteMapping(path = "deleteReview/{reviewId}")
    public void deleteReview(@PathVariable("reviewId") Long reviewId) {
        reviewRepository.deleteById(reviewId);
    }

    @PutMapping(path = "editReview/{reviewId}")
    public void updateReview(@PathVariable(value = "reviewId") Long reviewId, @RequestBody Review newReview) {
        Review review = reviewRepository.findById(reviewId).get();

        review.setTitle(newReview.getTitle());
        review.setRate(newReview.getRate());
        review.setDescription(newReview.getDescription());

        reviewRepository.save(review);
    }
}

