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
            className='group relative rounded-2xl overflow-hidden aspect-[4/5] isolate cursor-pointer'
        >
            <img
                src={image}
                alt={name}
                className='absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110'
            />
            <div className='absolute top-4 left-4 right-4 flex items-center  justify-between z-10'>
                <span className='rounded-full bg-white/90 backdrop-blur px-3 py-1 text-xs font-semibold'>
                    {category}
                </span>
                <span className='inline-flex items-center gap-1 rounded-full bg-black/40 backdrop-blur-md px-2.5 py-1 text-xs font-semibold text-white'>
                    <Star className='w-3 h-3 fill-yellow-400 text-yellow-400' />
                    {rating.toFixed(1)}
                </span>
            </div>

            <div className='absolute inset-x-3 bottom-3 rounded-2xl bg-white/15 backdrop-blur-xl overflow-hidden transition-all duration-500 ease-out group-hover:inset-x-0 group-hover:bottom-0 group-hover:rounded-none group-hover:bg-black/45 group-hover:border-transparent'>
                <div className='p-4 flex items-center justify-between gap-3'>
                    <div className='min-w-0'>
                        <h3 className='font-poppins font-bold text-white text-lg truncate max-w-md'>{name}</h3>
                        <div className='mt-1 flex items-center gap-1.5 text-xs text-white/85 truncate'>
                            <MapPin className='w-3 h-3 shrink-0' />
                            <span className='font-lato'>{destination}</span>
                        </div>
                    </div>
                    <div className='text-right shrink-0'>
                        <p className='font-poppins text-xl md:text-2xl font-semibold text-white leading-none'>${price.toLocaleString()}</p>
                    </div>
                </div>
                <div className='grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-out'>
                    <div className='overflow-hidden'>
                        <div className='px-4 pb-4 pt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100'>
                            <p className='text-sm text-white/90 line-clamp-2'>{description}</p>
                            <div className='mt-3 flex items-center justify-between border-t border-white/20 pt-3'>
                                <div className='text-xs text-white/85 flex items-center gap-1'>
                                    <Clock className='w-3 h-3' />
                                    {duration}
                                </div>
                                <button className='inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold hover:bg-primary hover:text-white transition-colors'>
                                    {textbutton}
                                    <ArrowUpRight className='w-3.5 h-3.5' />
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