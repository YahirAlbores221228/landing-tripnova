const Carousel = ({ children, ref: carouselRef }) => {
    return (
        <div className='overflow-hidden'>
            <div
                ref={carouselRef}
                className='flex gap-4 overflow-hidden scroll-smooth py-2 px-1'
            >
                {children}
            </div>
        </div>
    )
}

export default Carousel;