import { useState, useMemo, useEffect } from 'react';

import cotizadorData from '../data/cotizador.json';

const INITIAL_STATE = {
  destino: '',
  personas: 1,
  duracion: 1,
  tipoViaje: 'basico',
  serviciosExtra: []
};

export const useCotizador = () => {
  const [formData, setFormData] = useState(() => {
    const saved = localStorage.getItem('cotizacion_viaje');
    return saved ? JSON.parse(saved) : INITIAL_STATE;
  });

  useEffect(() => {
    localStorage.setItem('cotizacion_viaje', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const total = useMemo(() => {
    if (!formData.destino) return 0;

    const destinoSelected = cotizadorData.destinos.find(d => d.value === formData.destino);
    if (!destinoSelected) return 0;

    let precioBase = destinoSelected.precioBase;

    const tipoSelected = cotizadorData.tiposViaje.find(t => t.value === formData.tipoViaje);
    const multiplicador = tipoSelected ? tipoSelected.multiplicador : 1;

    let precioServicios = 0;
    formData.serviciosExtra.forEach(srv => {
      const servicio = cotizadorData.serviciosAdicionales.find(s => s.value === srv);
      if (servicio) precioServicios += servicio.precio;
    });

    const precioDiasExtra = (formData.duracion - 1) * cotizadorData.configuracionGeneral.precioDiaExtra;

    return ((precioBase * multiplicador) + precioServicios + precioDiasExtra) * formData.personas;
  }, [formData]);

  return {
    formData,
    handleInputChange,
    total,
    data: cotizadorData
  };
};