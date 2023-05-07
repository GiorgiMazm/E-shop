package com.example.service.controller;

import com.example.service.model.Product;
import com.example.service.model.User;
import com.example.service.repository.UserRepository;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Objects;


@RestController
@RequestMapping
public class UserController {

    private void validateUser (User user) {
        if (Objects.equals(user.getName().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User name can not be empty");
        }
        if (Objects.equals(user.getEmail().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User email can not be empty");
        }
        if (Objects.equals(user.getPassword().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User password can not be empty");
        }
        if (user.getPassword().trim().length() < 6) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User password must be at least 6 characters");
        }
        if (Objects.equals(user.getLastName().trim(), "")) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "User last name can not be empty");
        }
    }
    UserRepository userRepository;

    public UserController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping(path = "/userList")
    public List<User> getAllUser() {
        return this.userRepository.findAll();
    }

    @PostMapping("newUser")
    public void createUser(@RequestBody User user) {
        validateUser(user);
        userRepository.save(user);
    }

    @DeleteMapping(path = "deleteUser/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        userRepository.deleteById(userId);
    }

    @PutMapping(path = "editUser/{userId}")
    public void updateUser(@PathVariable(value = "userId") Long userId, @RequestBody User newUser) {
        User user = userRepository.findById(userId).get();
        validateUser(newUser);
        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setLastName(newUser.getLastName());
        user.setPassword(newUser.getPassword());

        userRepository.save(user);
    }

    @PutMapping(path = "editPrivilege/{userId}")
    public void updateUserPrivilege(@PathVariable(value = "userId") Long userId) {
        User user = userRepository.findById(userId).get();

        user.setAdmin(!user.isAdmin());
        userRepository.save(user);
    }

    @PutMapping(path = "editUserBag/{userId}")
    public void updateUserBag(@PathVariable(value = "userId") Long userId, @RequestBody List<Product> newProducts) {
        User user = userRepository.findById(userId).get();

        user.getBag().clear();
        user.getBag().addAll(newProducts);

        userRepository.save(user);
    }

    @PostMapping(path = "addUserBag/{userId}")
    public void addUserBag(@PathVariable(value = "userId") Long userId, @RequestBody Product product) {
        User user = userRepository.findById(userId).get();
        ProductController.validateProduct(product);
        user.getBag().add(product);
        userRepository.save(user);
    }

    @DeleteMapping(path = "deleteUserBag/{userId}")
    public void deleteUserBagItem(@PathVariable(value = "userId") Long userId, @RequestBody Product product) {
        User user = userRepository.findById(userId).get();
        System.out.println("svsdgvgvsgs" + product);
        user.getBag().remove(product);
        userRepository.save(user);
    }
}