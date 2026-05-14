import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import heroimg from "../assets/hero/hero.jpg";

const Hero = () => {
    return (
        <div style={{ backgroundImage: `url(${heroimg})` }} className="relative min-h-screen bg-cover bg-center bg-no-repeat">
            <div className="absolute inset-0 bg-black/60 object-cover" />

            <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
                <div className="max-w-2xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: "easeInOut" }}
                        className="font-poppins text-4xl md:text-6xl font-bold text-white leading-tight">
                        Viajes que elevan tus historias.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.25 }}
                        className="font-lato text-lg text-gray-200 mt-6">
                        Experiencias de viaje únicas y personalizadas para cada tipo de viajero.
                        Nacionales e internacionales, aventura, lujo o familia — lo tenemos todo.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mt-8 flex flex-wrap gap-4">
                        <a
                            href="#paquetes"
                            className="group inline-flex items-center gap-2 font-poppins rounded-full bg-accent px-8 py-3.5 text-sm font-semibold text-white transition-all">
                            Explora paquetes
                            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#contacto"
                            className="inline-block font-poppins rounded-full border-2 border-white px-8 py-3.5 text-sm font-medium text-white">
                            Contáctanos
                        </a>
                    </motion.div>

                    {/* Estadisticas */}
                    <div className="flex gap-8 mt-12">
                        <div className="flex flex-col">
                            <span className="font-poppins text-3xl font-bold text-accent">+500</span>
                            <span className="font-lato text-sm text-gray-300">Destinos</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-poppins text-3xl font-bold text-accent">+10k</span>
                            <span className="font-lato text-sm text-gray-300">Viajeros felices</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-poppins text-3xl font-bold text-accent">+15</span>
                            <span className="font-lato text-sm text-gray-300">Años de experiencia</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;