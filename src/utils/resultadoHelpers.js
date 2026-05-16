export const listResumen = ({ destinationLabel, people, duration, tripTravelLabel }) => {
  return [
    { 
      id: 'destino', 
      label: 'Destino', 
      value: destinationLabel || 'No seleccionado', 
    },
    { 
      id: 'pasajeros', 
      label: 'Pasajeros', 
      value: `${people} ${people === 1 ? 'persona' : 'personas'}` 
    },
    { 
      id: 'estadia', 
      label: 'Estadía', 
      value: `${duration} ${duration === 1 ? 'día' : 'días'}` 
    },
    ...(tripTravelLabel ? [{ 
      id: 'categoria', 
      label: 'Categoría', 
      value: tripTravelLabel 
    }] : [])
  ];
};