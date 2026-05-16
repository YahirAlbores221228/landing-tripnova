import features from "../data/features";
import image1 from "../assets/images/about/image-1.webp";
import image2 from "../assets/images/about/image-2.webp";
import FeatureCard from "../components/FeatureCard";

const About = () => {
    return (
        <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <div className="relative h-[400px] sm:h-[500px] order-2 lg:order-1">
                    <img
                        src={image2}
                        alt="About Us"
                        className="absolute top-0 left-0 w-[65%] h-[85%] object-cover rounded-2xl shadow-xl border-4 md:border-8 border-white z-10"
                    />
                    <img
                        src={image1}
                        alt="About Us"
                        className="absolute bottom-0 right-0 w-[65%] h-[85%] object-cover rounded-2xl shadow-xl border-4 md:border-8 border-white z-0"
                    />
                </div>
                <div className="flex flex-col order-1 lg:order-2 lg:text-left">
                    <span className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                        Sobre TripNova
                    </span>
                    <h2 className="font-poppins mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                        Viajamos contigo hacia tus sueños
                    </h2>
                    <p className="font-lato mt-6 text-secondary text-base md:text-lg leading-relaxed ">
                        En TripNova somos apasionados por los viajes. Llevamos más de 15 años creando
                        experiencias únicas y personalizadas para cada tipo de viajero. Desde escapadas
                        románticas hasta aventuras familiares, estamos contigo en cada paso del camino.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;