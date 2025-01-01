package com.restaurant.dto;

import jakarta.validation.constraints.*;
import lombok.Data;

@Data
public class ReservationDTO {
    @NotBlank(message = "Name is required")
    private String customerName;

    @NotBlank(message = "Email is required")
    @Email(message = "Invalid email format")
    private String email;

    @NotBlank(message = "Phone is required")
    @Pattern(regexp = "^[0-9]{10}$", message = "Phone must be 10 digits")
    private String phone;

    @NotNull(message = "Date is required")
    private String date;

    @NotNull(message = "Time is required")
    private String time;

    @NotNull(message = "Party size is required")
    @Min(value = 1, message = "Party size must be at least 1")
    @Max(value = 20, message = "Party size cannot exceed 20")
    private Integer partySize;

    private String specialRequests;
}