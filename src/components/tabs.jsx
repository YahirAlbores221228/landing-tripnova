const Tabs = ({ categories, activeTab, onTabClick}) => {
    return (
        <div className="flex gap-2 sm:gap-4 px-4 sm:px-0 flex-wrap">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer ${
                        activeTab === category.value
                            ? "bg-accent text-white shadow-accent/20 scale-105"
                            : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                    onClick={() => onTabClick(category.value)}
                >
                    {category.label}
                </button>
            ))}
        </div>
    );
}

export default Tabs;