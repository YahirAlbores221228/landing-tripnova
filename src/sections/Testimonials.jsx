import testimonials from "../data/testimonials";
import TestimonialsCard from "../components/Testimonialscard";

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-gray-50/50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-10 md:mb-16 max-w-4xl mx-auto">
                     <span className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                        Opiniones
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl text-primary font-poppins font-bold leading-tight">
                        Historias de viajeros satisfechos
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialsCard 
                            key={index}
                            icon={testimonial.icon}
                            name={testimonial.name}
                            destination={testimonial.destination}
                            rating={testimonial.rating}
                            text={testimonial.text}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Testimonials;