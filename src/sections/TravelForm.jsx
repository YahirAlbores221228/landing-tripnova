import SelectField from '../components/ui/SelectField';
import RangeSlider from '../components/ui/RangeSlider';
import RadioCards from '../components/ui/RadioCards';
import CheckBoxCards from '../components/CheckBoxCards';

const TravelForm = ({
    formData,
    onInputChange,
    data
}) => {
    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                <SelectField
                    label="Destino o paquete"
                    name="destino"
                    value={formData.destino}
                    onChange={onInputChange}
                    options={data.destinos}
                    placeholder="Selecciona hacia dónde viajas"
                    required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    <RangeSlider
                        label="Personas"
                        name="personas"
                        min={1}
                        max={10}
                        unit=""
                        value={formData.personas}
                        onChange={onInputChange}
                    />
                    <RangeSlider
                        label="Duración"
                        name="duracion"
                        min={1}
                        max={30}
                        unit="días"
                        value={formData.duracion}
                        onChange={onInputChange}
                    />
                </div>
                <RadioCards
                    label="Tipo de viaje"
                    name="tipoViaje"
                    value={formData.tipoViaje}
                    onChange={onInputChange}
                    options={data.tiposViaje}
                />
                <CheckBoxCards
                    options={data.serviciosAdicionales}
                    value={formData.serviciosExtra}
                    onChange={onInputChange}
                />
            </form>
        </div>
    );
};

export default TravelForm;