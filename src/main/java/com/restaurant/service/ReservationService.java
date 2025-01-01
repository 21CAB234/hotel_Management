package com.restaurant.service;

import com.restaurant.dto.ReservationDTO;
import com.restaurant.exception.ReservationException;
import com.restaurant.model.Reservation;
import com.restaurant.model.ReservationStatus;
import com.restaurant.repository.ReservationRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ReservationService {
    private final ReservationRepository reservationRepository;
    private static final int MAX_RESERVATIONS_PER_SLOT = 5;

    @Transactional
    public Reservation createReservation(ReservationDTO dto) {
        LocalDate date = LocalDate.parse(dto.getDate());
        LocalTime time = LocalTime.parse(dto.getTime());

        validateReservation(date, time);

        Reservation reservation = new Reservation();
        reservation.setCustomerName(dto.getCustomerName());
        reservation.setEmail(dto.getEmail());
        reservation.setPhone(dto.getPhone());
        reservation.setDate(date);
        reservation.setTime(time);
        reservation.setPartySize(dto.getPartySize());
        reservation.setSpecialRequests(dto.getSpecialRequests());
        reservation.setStatus(ReservationStatus.PENDING);

        return reservationRepository.save(reservation);
    }

    private void validateReservation(LocalDate date, LocalTime time) {
        if (date.isBefore(LocalDate.now())) {
            throw new ReservationException("Cannot make reservation for past date");
        }

        int existingReservations = reservationRepository.countReservationsByDateTime(date, time);
        if (existingReservations >= MAX_RESERVATIONS_PER_SLOT) {
            throw new ReservationException("Selected time slot is fully booked");
        }
    }

    public List<Reservation> getReservationsForDate(LocalDate date) {
        return reservationRepository.findByDateOrderByTimeAsc(date);
    }

    @Transactional
    public Reservation updateReservationStatus(Long id, ReservationStatus status) {
        Reservation reservation = reservationRepository.findById(id)
            .orElseThrow(() -> new ReservationException("Reservation not found"));
        
        reservation.setStatus(status);
        return reservationRepository.save(reservation);
    }
}