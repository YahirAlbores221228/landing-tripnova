const FooterColumn = ({ title, children }) => {
    return (
        <div>
            <h3 className='text-white text-base md:text-lg font-poppins font-bold mb-4 tracking-wide'>{title}</h3>
            {children}
        </div>
    );
};

export default FooterColumn;