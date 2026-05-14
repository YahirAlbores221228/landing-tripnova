const Tabs = ({ categories, activeTab, onTabClick}) => {
    return (
        <div className="flex gap-2 flex-wrap">
            {categories.map((category) => (
                <button
                    key={category.id}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                        activeTab === category.value
                            ? "bg-accent text-white"
                            : "bg-gray-200 text-gray-700 hover:bg-gray-300"
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