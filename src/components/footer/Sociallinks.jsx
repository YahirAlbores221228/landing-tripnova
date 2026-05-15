const SocialLinks = ({ items }) => {
    return (
        <div className='flex gap-4'>
            {items.map((item, index) => (
                <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className={`p-3 md:p-4 bg-white/10 rounded-full text-white transition-all duration-300 transform hover:-translate-y-1 hover:text-white ${item.hoverClass}`}>
                    <item.Icon className="w-6 h-6" />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;