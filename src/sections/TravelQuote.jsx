import TravelForm from './TravelForm';
import QuoteResult from './QuoteResult';
import { useCotizador } from '../hooks/useCotizador';

const TravelQuote = () => {
  const { formData, handleInputChange, total, data } = useCotizador();

  const destinoLabel = data.destinos.find(d => d.value === formData.destino)?.label || '';
  const tipoViajeLabel = data.tiposViaje.find(t => t.value === formData.tipoViaje)?.label || '';

  return (
    <div className='py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white'>
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <div className="max-w-4xl text-center mb-12 lg:mb-16">
          <span className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
            Cotizador
          </span>
          <h2 className="font-poppins text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Calcula tu viaje ideal en segundos
          </h2>
          <p className="font-lato text-secondary text-base sm:text-lg mt-4">
            Estimación instantánea. Un asesor te confirmará disponibilidad y mejores tarifas.
          </p>
        </div>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-start'>
          <div className="lg:col-span-2">
            <TravelForm
              formData={formData}
              onInputChange={handleInputChange}
              data={data}
            />
          </div>
          <div className='lg:col-span-1'>
            <QuoteResult
              total={total}
              personas={formData.personas}
              duracion={formData.duracion}
              destinoLabel={destinoLabel}
              tipoViajeLabel={tipoViajeLabel}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TravelQuote;