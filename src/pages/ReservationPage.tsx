import React from 'react';
import { useMutation } from '@tanstack/react-query';
import { ReservationForm } from '../components/reservation/ReservationForm';
import { reservationApi } from '../api/reservationApi';
import { CreateReservationDTO } from '../types/reservation';
import { useNavigate } from 'react-router-dom';

export function ReservationPage() {
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (data: CreateReservationDTO) => reservationApi.create(data),
    onSuccess: () => {
      navigate('/confirmation');
    },
  });

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">Make a Reservation</h1>
          <ReservationForm 
            onSubmit={(data) => mutation.mutate(data)}
            isLoading={mutation.isPending}
          />
        </div>
      </div>
    </div>
  );
}