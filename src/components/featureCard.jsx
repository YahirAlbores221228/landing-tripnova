const FeatureCard = ({ icon, title, description }) => {
    return (
        <div className="rounded-2xl p-6 border border-gray-200 hover:border-accent transition-colors">
            <div className="mb-4">{icon}</div>
            <h3 className=" font-poppins mt-4 text-xl font-bold text-gray-800">{title}</h3>
            <p className="font-lato mt-1 text-gray-500 text-sm">{description}</p>
        </div>
    );  
};

export default FeatureCard;