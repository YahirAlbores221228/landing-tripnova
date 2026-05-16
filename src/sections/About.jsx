import { motion } from "framer-motion";

import features from "../data/features";
import image1 from "../assets/images/about/image-1.webp";
import image2 from "../assets/images/about/image-2.webp";
import FeatureCard from "../components/FeatureCard";

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const About = () => {
    return (
        <motion.section
            id="about"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
            className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                <motion.div
                    variants={fadeUp}
                    className="relative h-[400px] sm:h-[500px] order-2 lg:order-1">
                    <motion.img
                        initial={{ opacity: 0, x: -40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                        src={image2}
                        alt="About Us"
                        className="absolute top-0 left-0 w-[65%] h-[85%] object-cover rounded-2xl shadow-xl border-4 md:border-8 border-white z-10"
                    />
                    <motion.img
                        initial={{ opacity: 0, x: 40, scale: 0.95 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        viewport={{ once: true }}
                        src={image1}
                        alt="About Us"
                        className="absolute bottom-0 right-0 w-[65%] h-[85%] object-cover rounded-2xl shadow-xl border-4 md:border-8 border-white z-0"
                    />
                </motion.div>
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.2 }}
                    className="flex flex-col order-1 lg:order-2 lg:text-left">
                    <motion.span
                        variants={fadeUp}
                        className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                        Sobre TripNova
                    </motion.span>
                    <motion.h2
                        variants={fadeUp}
                        className="font-poppins mt-2 text-3xl sm:text-4xl lg:text-5xl font-bold text-primary leading-tight">
                        Viajamos contigo hacia tus sueños
                    </motion.h2>
                    <motion.p
                        variants={fadeUp}
                        className="font-lato mt-6 text-secondary text-base md:text-lg leading-relaxed ">
                        En TripNova somos apasionados por los viajes. Llevamos más de 15 años creando
                        experiencias únicas y personalizadas para cada tipo de viajero. Desde escapadas
                        románticas hasta aventuras familiares, estamos contigo en cada paso del camino.
                    </motion.p>
                    <motion.div
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12">
                        {features.map((feature) => (
                            <motion.div
                                key={feature.id}
                                variants={fadeUp}
                            >
                                <FeatureCard
                                    icon={feature.icon}
                                    title={feature.title}
                                    description={feature.description}
                                />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default About;