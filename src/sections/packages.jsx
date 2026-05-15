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
        <section className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
            <div className="max-w-7xl mx-auto flex flex-col items-center">
                <div className="max-w-3xl text-center mb-12 lg:mb-16">
                    <span className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                        Nuestros Paquetes
                    </span>
                    <h2 className="font-poppins text-primary text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">Explora nuestros paquetes de viaje</h2>
                    <p className="font-lato text-secondary text-base sm:text-lg mt-4">
                        Descubre nuestras ofertas especiales y planes de viaje diseñados para satisfacer tus necesidades.
                    </p>
                </div>
                <Tabs
                    categories={categories}
                    activeTab={activeTab}
                    onTabClick={setActiveTab}
                />
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8 mt-10 w-full">
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