import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowUpRight } from 'lucide-react';

const PackagesCard = ({
    image,
    name,
    destination,
    duration,
    price,
    description,
    rating,
    category,
    textbutton
}) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className='group relative rounded-2xl overflow-hidden aspect-[4/5] sm:aspect-[3/4] isolate'
        >
            <img
                src={image}
                alt={name}
                className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90'
            />
            <div className="absolute inset-0 bg-black/30 opacity-90 group-hover:opacity-90 transition-opacity" />
            <div className='absolute top-4 left-4 right-4 flex items-center justify-between z-10'>
                <span className='font-lato rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-xs uppercase tracking-widest font-bold text-white'>
                    {category}
                </span>
                <span className='font-lato inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-xs font-bold text-white'>
                    <Star className='w-3 h-3 fill-yellow-400 text-yellow-400' />
                    {rating.toFixed(1)}
                </span>
            </div>
            <div className='absolute inset-x-3 bottom-3 rounded-2xl bg-white/15 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-out group-hover:inset-x-0 group-hover:bottom-0 group-hover:rounded-none group-hover:bg-black/45 group-hover:border-transparent'>
                <div className='p-4 flex items-end justify-between gap-3'>
                    <div className='min-w-0'>
                        <h3 className='font-poppins font-bold text-white text-lg lg:text-xl leading-tight truncate'>{name}</h3>
                        <div className='mt-1 flex items-center gap-1.5 text-gray-200 truncate'>
                            <MapPin className='w-3 h-3 shrink-0' />
                            <p className='font-lato text-xs font-bold uppercase tracking-wider'>{destination}</p>
                        </div>
                    </div>
                    <div className='text-right shrink-0'>
                        <p className='font-poppins text-xl font-bold text-white leading-none'>
                            ${price.toLocaleString()}
                        </p>
                    </div>
                </div>
                <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out'>
                    <div className='overflow-hidden'>
                        <div className='px-4 pb-4 pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                            <p className='text-sm text-gray-200 line-clamp-2 font-lato leading-relaxed'>
                                {description}
                            </p>
                            <div className='mt-4 flex items-center justify-between border-t border-gray-700 pt-3'>
                                <div className='text-sm text-gray-200 flex items-center gap-2 font-lato tracking-tighter'>
                                    <Clock className='w-4 h-4' />
                                    {duration}
                                </div>
                                <button className='inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 font-lato text-xs font-semibold hover:bg-accent hover:text-white cursor-pointer transition-colors'>
                                    {textbutton}
                                    <ArrowUpRight className='w-4 h-4' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.article>
    );
}

export default PackagesCard;