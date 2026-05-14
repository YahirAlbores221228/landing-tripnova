import { useState } from "react";

import Tabs from "../components/tabs";
import packages from "../data/packages";
import categories from "../data/categories";
import PackageCard from "../components/packageCard";

const Packages = () => {
    const [activeTab, setActiveTab] = useState("all");

    const filteredPackages = activeTab === "all"
        ? packages
        : packages.filter(pkg => pkg.category === activeTab);

    return (
        <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="flex flex-col gap-2 mb-10">
                    <h2 className="font-poppins text-4xl font-bold text-gray-800 text-center">Itinerarios listos para reservar</h2>
                    <p className="font-lato text-gray-500 text-lg text-center">
                        Descubre nuestras ofertas especiales y planes de viaje diseñados para satisfacer tus necesidades.
                    </p>
                </div>
                <Tabs
                    categories={categories}
                    activeTab={activeTab}
                    onTabClick={setActiveTab}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
                    {filteredPackages.map(pkg => (
                        <PackageCard
                            key={pkg.id}
                            image={pkg.image}
                            name={pkg.name}
                            destination={pkg.destination}
                            duration={pkg.duration}
                            price={pkg.price}
                            description={pkg.description}
                            rating={pkg.rating}
                            category={pkg.category}
                            textbutton={"Ver detalles"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Packages;