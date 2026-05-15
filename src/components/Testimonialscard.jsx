import { Quote, Star } from 'lucide-react';

const TestimonialsCard = ({
    name,
    destination,
    rating,
    text
}) => {
    return (
        <article className="bg-white p-5 md:p-6 flex flex-col rounded-2xl shadow-md border border-gray-200 transition-all duration-300 hover:shadow-lg">
            <Quote className="w-5 h-5 md:w-6 md:h-6 text-accent" />
            <blockquote className="mt-3 text-base text-secondary leading-relaxed flex-1">
                "{text}"
            </blockquote>
            <div className="mt-5 flex gap-0.5">
                {Array.from({ length: rating }).map((_, index) => (
                    <Star
                        key={index}
                        className={`w-3.5 h-3.5 md:w-5 md:h-5 fill-yellow-400 text-yellow-400`} />
                ))}
            </div>
            <figcaption className='mt-4 pt-4 border-t border-gray-200'>
                <h3 className="text-base md:text-lg font-semibold text-primary font-poppins">{name}</h3>
                <p className="text-sm font-medium font-lato text-secondary mt-0.5">{destination}</p>
            </figcaption>
        </article>
    );
}

export default TestimonialsCard;