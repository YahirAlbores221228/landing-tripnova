import { MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

const DestinationCard = ({
    name,
    country,
    image
}) => {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ duration: 0.3 }}
            className='relative rounded-2xl overflow-hidden aspect-[3/4] cursor-pointer min-w-[280px] flex-shrink-0'
        >
            <img
                src={image}
                alt={name}
                className='absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent' />
            <div className='absolute bottom-4 left-4'>
                <h3 className='font-poppins font-bold text-white text-xl'>{name}</h3>
                <div className='flex items-center gap-1 mt-1'>
                    <MapPin className='w-3 h-3 text-white/80' />
                    <span className='font-lato text-white/80 text-sm'>{country}</span>
                </div>
            </div>
        </motion.div>
    )
};

export default DestinationCard;