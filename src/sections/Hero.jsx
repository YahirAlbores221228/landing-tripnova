import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import stats from "../data/stat";
import heroimg from "../assets/hero/hero.jpg";
import StatCard from "../components/StatCard";

const Hero = () => {
    return (
        <div id="hero" style={{ backgroundImage: `url(${heroimg})` }} className="relative min-h-screen bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/60 object-cover" />
            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
                <div className="max-w-xs sm:max-w-lg md:max-w-xl lg:max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                        className="font-poppins text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight">
                        Viajes que elevan tus historias.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="font-lato text-base md:text-lg leading-relaxed text-gray-200 mt-4 md:mt-6">
                        Experiencias de viaje únicas y personalizadas para cada tipo de viajero.
                        Nacionales e internacionales, aventura, lujo o familia — lo tenemos todo.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#packages"
                            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 font-poppins rounded-full bg-accent px-6 md:px-8 py-3 md:py-3.5 text-sm font-semibold text-white transition-all">
                            Explora paquetes
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#destinations"
                            className="inline-flex items-center justify-center w-full sm:w-auto font-poppins rounded-full border border-white hover:bg-white/10 px-6 md:px-8 py-3 md:py-3.5 text-sm font-semibold transition-colors text-white">
                            Explorar destinos
                        </a>
                    </motion.div>
                    <div className="flex gap-6 md:gap-15 mt-12">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.7 + index * 0.15 }}
                            >
                                <StatCard
                                    title={stat.title}
                                    value={stat.value}
                                />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;