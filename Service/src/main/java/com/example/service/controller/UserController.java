
package com.example.service.controller;

import com.example.service.model.User;
import com.example.service.repository.UserRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping
public class UserController {

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
        userRepository.save(user);
    }

    @DeleteMapping(path = "deleteUser/{userId}")
    public void deleteUser(@PathVariable("userId") Long userId) {
        userRepository.deleteById(userId);
    }

    @PutMapping(path = "editUser/{userId}")
    public void updateUser(@PathVariable(value = "userId") Long userId, @RequestBody User newUser) {
        User user = userRepository.findById(userId).get();

        user.setName(newUser.getName());
        user.setEmail(newUser.getEmail());
        user.setLastName(newUser.getLastName());
        user.setPassword(newUser.getPassword());
        user.setAdmin(newUser.isAdmin());
        user.setBag(newUser.getBag());

        userRepository.save(user);
    }
}

