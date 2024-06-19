package com.example.Hotel_Management.hotel_entity;

import jakarta.persistence.*;
import lombok.*;

import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Room_Table")
public class Room_Entity {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "ROOM_ID")
    private Long customerId;

    @Column(name = "Customer_name")
    private String customerName;

    @Column(name = "Mobile_Number")
    private long mobileNumber;

    @Column(name = "Room_Number")
    private int roomNumber;

    @Column(name = "Room_Charge")
    private double roomCharge;

    @Column(name = "Comfort_Class")
    private int comfortClass;

    @Column(name = "Address")
    private String address;

    @ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinTable(name = "Food_And_Room_Table",
            joinColumns = @JoinColumn(name = "Room_Id", referencedColumnName = "ROOM_ID"),
            inverseJoinColumns = @JoinColumn(name = "Food_Id", referencedColumnName = "CUSTOMER_ID"))
    private Set<Food_Entity> foodset;
}