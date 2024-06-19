package com.example.Hotel_Management.hotel_controller;

import com.example.Hotel_Management.hotel_Repo.Food_Repo;
import com.example.Hotel_Management.hotel_entity.Food_Entity;
import com.example.Hotel_Management.hotel_entity.Room_Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class Food_Controller {
    @Autowired
    Food_Repo foodRepo;
@PostMapping("/Food")
    public ResponseEntity<Food_Entity>food_order(@RequestBody Food_Entity foodEntity){
 foodRepo.save(foodEntity);
 return ResponseEntity.ok(foodEntity);
}
@GetMapping("/FOOD_Table")
    public List<Food_Entity> foodList(){
    return foodRepo.findAll();
}
    @GetMapping("searchFoodTable/{id}")
    public ResponseEntity<Food_Entity> check(@PathVariable Long id) {
        Optional<Food_Entity> food = this.foodRepo.findById(id);
        if (food.isPresent()) {
            return ResponseEntity.ok(food.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
}