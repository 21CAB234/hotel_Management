package com.restaurant.repository;

import com.restaurant.model.Reservation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {
    @Query("SELECT COUNT(r) FROM Reservation r WHERE r.date = ?1 AND r.time = ?2")
    int countReservationsByDateTime(LocalDate date, LocalTime time);

    List<Reservation> findByDateOrderByTimeAsc(LocalDate date);
}