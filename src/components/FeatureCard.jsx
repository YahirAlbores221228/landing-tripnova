const FeatureCard = ({ 
    icon: Icon, 
    title, 
    description 
}) => {
    return (
        <div className="group rounded-2xl p-6 border border-gray-100 bg-white hover:bg-accent/5 hover:border-accent transition-all duration-300 shadow-sm hover:shadow-md">
            <div className="mb-4 text-accent bg-accent/10 w-12 h-12 flex items-center justify-center rounded-xl group-hover:scale-110 transition-transform">
                <Icon className="w-6 h-6" />
            </div>
            <h3 className="font-poppins text-lg font-bold text-primary leading-normal">
                {title}
            </h3>
            <p className="font-lato mt-2 text-secondary text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default FeatureCard;