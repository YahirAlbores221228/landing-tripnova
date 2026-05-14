import { Award, Globe, HeartHandshake, Sparkles } from "lucide-react"

import aboutimg from "../assets/hero/hero.jpg";
import FeatureCard from "../components/featureCard";
import features from "../data/features";

const iconMap = {
    "award": <Award className="text-accent" />,
    "globe": <Globe className="text-accent" />,
    "heart-handshake": <HeartHandshake className="text-accent" />,
    "sparkles": <Sparkles className="text-accent" />
};

const About = () => {
    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative h-[500px] order-2 md:order-1">
                    <img
                        src={aboutimg}
                        alt="About Us"
                        className="absolute top-0 left-0 w-[70%] h-3/4 object-cover rounded-2xl shadow-lg border-6 border-white"
                    />
                    <img
                        src={aboutimg}
                        alt="About Us"
                        className="absolute bottom-0 right-0 w-[70%] h-3/4 object-cover rounded-2xl shadow-lg border-6 border-white"
                    />
                </div>
                <div className="flex flex-col order-1 md:order-2">
                    <span className="font-lato text-sm font-semibold text-accent uppercase tracking-wide">
                        Sobre TripNova
                    </span>
                    <h1 className="font-poppins mt-2 text-4xl font-bold text-gray-800 leading-relaxed">
                        Viajamos contigo hacia tus sueños
                    </h1>
                    <p className="font-lato mt-5 text-gray-500 text-lg leading-relaxed">
                        En TripNova somos apasionados por los viajes. Llevamos más de 15 años creando
                        experiencias únicas y personalizadas para cada tipo de viajero. Desde escapadas
                        románticas hasta aventuras familiares, estamos contigo en cada paso del camino.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10">
                        {features.map((feature) => (
                            <FeatureCard
                                key={feature.id}
                                icon={iconMap[feature.icon]}
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