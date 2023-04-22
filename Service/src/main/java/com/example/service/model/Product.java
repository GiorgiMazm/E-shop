package com.example.service.model;

import jakarta.persistence.*;
import lombok.Data;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;


@Entity(name = "product")
@Data
@EntityListeners(AuditingEntityListener.class)
public class Product {

    private enum Category {
        NotSet, Technique, Gym
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "category", nullable = false)
    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(name = "description", nullable = false)
    private String description;

    @Column(name = "link", nullable = false)
    private String link;

    @Column(name = "price", nullable = false)
    private int price;

    public Product() {
    }

}
