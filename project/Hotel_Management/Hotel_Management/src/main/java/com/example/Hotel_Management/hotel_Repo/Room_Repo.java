package com.example.Hotel_Management.hotel_Repo;

import com.example.Hotel_Management.hotel_entity.Room_Entity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface Room_Repo extends JpaRepository<Room_Entity,Long> {
}