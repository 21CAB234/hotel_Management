import axios from 'axios';
import { CreateReservationDTO, Reservation } from '../types/reservation';

const API_URL = 'http://localhost:8080/api/reservations';

export const reservationApi = {
  create: async (data: CreateReservationDTO): Promise<Reservation> => {
    const response = await axios.post(API_URL, data);
    return response.data;
  },

  getAll: async (): Promise<Reservation[]> => {
    const response = await axios.get(API_URL);
    return response.data;
  },

  getById: async (id: number): Promise<Reservation> => {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  },

  updateStatus: async (id: number, status: Reservation['status']): Promise<Reservation> => {
    const response = await axios.patch(`${API_URL}/${id}/status`, { status });
    return response.data;
  }
};