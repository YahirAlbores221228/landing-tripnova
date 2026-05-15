export const listResumen = ({ destinoLabel, personas, duracion, tipoViajeLabel }) => {
  return [
    { 
      id: 'destino', 
      label: 'Destino', 
      value: destinoLabel || 'No seleccionado', 
      extraClass: 'text-right max-w-[160px] truncate' 
    },
    { 
      id: 'pasajeros', 
      label: 'Pasajeros', 
      value: `${personas} ${personas === 1 ? 'persona' : 'personas'}` 
    },
    { 
      id: 'estadia', 
      label: 'Estadía', 
      value: `${duracion} ${duracion === 1 ? 'día' : 'días'}` 
    },
    ...(tipoViajeLabel ? [{ 
      id: 'categoria', 
      label: 'Categoría', 
      value: tipoViajeLabel 
    }] : [])
  ];
};