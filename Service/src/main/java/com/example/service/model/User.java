package com.example.service.model;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity(name = "user_account")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", updatable = false, nullable = false)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "last_name", nullable = false)
    private String LastName;

    @Column(name = "email", nullable = false, unique = true)
    private String email;

    @Column(name = "password", nullable = false)
    private String password;

    @Column(name = "bag", nullable = false)
    private String bag;

    @Column(name = "admin", nullable = false)
    private boolean admin;
}
