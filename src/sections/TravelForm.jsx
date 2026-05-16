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
                    name="destination"
                    value={formData.destination}
                    onChange={onInputChange}
                    options={data.destinations}
                    placeholder="Selecciona hacia dónde viajas"
                    required
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-2">
                    <RangeSlider
                        label="Personas"
                        name="people"
                        min={1}
                        max={10}
                        unit=""
                        value={formData.people}
                        onChange={onInputChange}
                    />
                    <RangeSlider
                        label="Duración"
                        name="duration"
                        min={1}
                        max={30}
                        unit="días"
                        value={formData.duration}
                        onChange={onInputChange}
                    />
                </div>
                <RadioCards
                    label="Tipo de viaje"
                    name="tripType"
                    value={formData.tripType}
                    onChange={onInputChange}
                    options={data.tripTravels}
                />
                <CheckBoxCards
                    options={data.extrasServices}
                    value={formData.extraServices}
                    onChange={onInputChange}
                />
            </form>
        </div>
    );
};

export default TravelForm;