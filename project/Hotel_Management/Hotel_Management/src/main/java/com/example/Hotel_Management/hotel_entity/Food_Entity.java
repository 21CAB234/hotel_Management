package com.example.Hotel_Management.hotel_entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "FOOD_TABLE")
public class Food_Entity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "CUSTOMER_ID")
    private Long customerId;

    @Column(name = "CUSTOMER_NAME")
    private String customerName;

    @Column(name = "MOBILE_NUMBER")
    private long mobileNumber;

    @Column(name = "ROOM_NUMBER")
    private int roomNumber;

    @Column(name = "ORDERED_FOODS")
    private String orderedFoods;

    @Column(name = "BILL_AMOUNT")
    private double billAmount;

    @ManyToMany(mappedBy = "foodset", fetch = FetchType.LAZY)
    private Set<Room_Entity> rooms;
}