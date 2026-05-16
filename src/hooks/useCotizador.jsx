import { useState, useMemo, useEffect } from 'react';

import cotizadorData from '../data/cotizador.json';

const INITIAL_STATE = {
  destination: '',
  people: 1,
  duration: 1,
  tripType: 'basico',
  extraServices: []
};

export const useCotizador = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('travel_quote');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('travel_quote', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const total = useMemo(() => {
    if (!formData.destination) return 0;

    const destinationSelected = cotizadorData.destinations.find(d => d.value === formData.destination);
    if (!destinationSelected) return 0;

    let basePrice = destinationSelected.precioBase;

    const typeSelected = cotizadorData.tripTravels.find(t => t.value === formData.tripType);
    const multiplier = typeSelected ? typeSelected.multiplicador : 1;

    let servicesPrice = 0;
    formData.extraServices.forEach(srv => {
      const service = cotizadorData.extrasServices.find(s => s.value === srv);
      if (service) servicesPrice += service.precio;
    });

    const extraDaysPrice = (formData.duration - 1) * cotizadorData.configuracionGeneral.precioDiaExtra;

    return ((basePrice * multiplier) + servicesPrice + extraDaysPrice) * formData.people;
  }, [formData]);

  return {
    formData,
    handleInputChange,
    total,
    data: cotizadorData
  };
};