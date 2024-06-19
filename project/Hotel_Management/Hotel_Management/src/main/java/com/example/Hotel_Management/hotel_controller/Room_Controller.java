package com.example.Hotel_Management.hotel_controller;

import com.example.Hotel_Management.hotel_Repo.Room_Repo;
import com.example.Hotel_Management.hotel_entity.Food_Entity;
import com.example.Hotel_Management.hotel_entity.Room_Entity;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class Room_Controller {
    @Autowired
    Room_Repo roomRepo;
@PostMapping("/ROOM")
    public ResponseEntity<Room_Entity> roomBooking(@RequestBody Room_Entity roomEntity){
   roomRepo.save(roomEntity);
    return ResponseEntity.ok(roomEntity);
}
    @GetMapping("/ROOM_TABLE")
    public List<Room_Entity> room_details(){
    return roomRepo.findAll();
    }
    @GetMapping("searchRoomTable/{id}")
    public ResponseEntity<Room_Entity> check(@PathVariable Long id) {
        Optional<Room_Entity> room = this.roomRepo.findById(id);
        if (room.isPresent()) {
            return ResponseEntity.ok(room.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}