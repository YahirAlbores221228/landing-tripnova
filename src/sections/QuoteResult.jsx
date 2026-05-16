import { listResumen } from "../utils/resultadoHelpers";
import Button from "../components/ui/Button";

const QuoteResult = ({
    total,
    people,
    duration,
    destinationLabel,
    tripTravelLabel,
}) => {
    const resumen = listResumen({ destinationLabel, people, duration, tripTravelLabel });
    return (
        <div className="w-full bg-white rounded-3xl p-6 shadow-sm border border-gray-100 sticky top-6">
            <h3 className="text-xl font-bold font-poppins text-primary mb-6 tracking-tight">
                Resumen de tu viaje
            </h3>
            <div className="flex flex-col gap-4 mb-8">
                {resumen.map((items) => (
                    <div key={items.id} className="flex justify-between items-start border-b border-gray-50 pb-3">
                        <span className="text-sm font-lato text-secondary">{items.label}</span>
                        <span className="text-sm font-semibold font-lato text-primary text-right">
                            {items.value}
                        </span>
                    </div>
                ))}
            </div>
            <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                <span className="text-xs font-lato text-secondary uppercase tracking-widest font-bold block mb-1">
                    Total estimado
                </span>
                <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold font-poppins text-accent">
                        ${total.toLocaleString('es-MX')}
                    </span>
                    <span className="text-sm font-medium font-lato text-secondary">MXN</span>
                </div>
            </div>
            <Button
                size="md"
                variant="primary"
                className="w-full font-semibold !rounded-full cursor-pointer"
            >
                Hablar con un asesor
            </Button>
        </div>
    );
};

export default QuoteResult;