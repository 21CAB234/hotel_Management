package com.example.Hotel_Management.hotel_Repo;

import com.example.Hotel_Management.hotel_entity.Food_Entity;
import org.springframework.data.jpa.repository.JpaRepository;
public interface Food_Repo extends JpaRepository<Food_Entity,Long> {


}