import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import Carousel from '../components/Carousel';
import destinations from '../data/destinations';
import DestinationCard from '../components/DestinationCard';

const Destinations = () => {
    const ref = useRef(null)

    const scrollPrev = () => ref.current.scrollBy({ left: -300, behavior: 'smooth' })
    const scrollNext = () => ref.current.scrollBy({ left: 300, behavior: 'smooth' })

    return (
        <section id='destinations' className='py-16 md:py-24 lg:py-32 px-4 md:px-8 bg-white overflow-hidden'>
            <div className='max-w-7xl mx-auto mb-10'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
                    <div className='flex flex-col gap-2'>
                        <span className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                            Populares
                        </span>
                        <h2 className="font-poppins text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                            Destinos populares
                        </h2>
                    </div>
                    <div className='flex gap-2 self-end sm:self-center'>
                        <button
                            onClick={scrollPrev}
                            className='p-2.5 rounded-full border border-gray-200 text-secondary hover:text-accent hover:border-accent transition-colors bg-white cursor-pointer active:scale-95'
                        >
                            <ChevronLeft className='w-5 h-5' />
                        </button>
                        <button
                            onClick={scrollNext}
                            className='p-2.5 rounded-full border border-gray-200 text-secondary hover:text-accent hover:border-accent transition-colors bg-white cursor-pointer active:scale-95'
                        >
                            <ChevronRight className='w-5 h-5' />
                        </button>
                    </div>
                </div>
            </div>
            <div className='max-w-7xl mx-auto'>
                <Carousel ref={ref}>
                    {destinations.map((dest) => (
                        <DestinationCard
                            key={dest.id}
                            name={dest.name}
                            country={dest.country}
                            image={dest.image}
                        />
                    ))}
                </Carousel>
            </div>
        </section>
    )
}

export default Destinations;