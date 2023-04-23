package com.example.service.controller;

import com.example.service.model.Review;
import com.example.service.repository.ReviewRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping
public class ReviewController {

    ReviewRepository reviewRepository;

    public ReviewController(ReviewRepository reviewRepository) {
        this.reviewRepository = reviewRepository;
    }

    @GetMapping(path = "/reviewList")
    public List<Review> getAllReview() {
        return this.reviewRepository.findAll();
    }

    @PostMapping("newReview")
    public void createReview(@RequestBody Review review) {
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

