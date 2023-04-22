package com.example.service.model;

import lombok.Data;

@Data
public class Review {
    private long id;
    private long userId;
    private long productId;
    private String title;
    private String description;
    private int rate;
}
