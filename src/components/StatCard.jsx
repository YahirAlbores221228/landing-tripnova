const StatCard = ({ title, value }) => {
    return (
        <div className="flex flex-col items-center">
            <h2 className="font-poppins text-3xl md:text-4xl font-bold text-accent">{value}</h2>
            <p className="font-lato text-sm text-white">{title}</p>
        </div>
    );
};

export default StatCard;