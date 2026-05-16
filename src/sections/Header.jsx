import { useState } from "react";
import { X, Menu } from "lucide-react";

import navLinks from "../data/navlinks";
import Button from "../components/ui/Button";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/95 backdrop-blur-sm">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6 lg:px-8">
                <span className="text-2xl md:text-3xl font-bold font-poppins tracking-tight text-primary">
                    Trip<span className="text-accent">Nova</span>
                </span>
                <nav className="hidden gap-6 lg:gap-8 md:flex items-center">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-primary font-lato font-semibold text-sm hover:text-accent transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                    <a href="#quote">
                        <Button variant="primary" size="md" className="font-semibold !rounded-full cursor-pointer">
                            Cotizar tu viaje
                        </Button>
                    </a>
                </nav>
                <span className="md:hidden cursor-pointer p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </span>
            </div>

            {isMenuOpen && (
                <div className="md:hidden border-t border-gray-100">
                    <nav className="flex flex-col gap-4 bg-white px-4 py-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="text-primary font-lato font-semibold text-sm hover:text-accent transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                        <a href="#quote" onClick={() => setIsMenuOpen(false)}>
                            <Button variant="primary" size="md" className="font-semibold !rounded-full w-full text-center">
                                Cotizar tu viaje
                            </Button>
                        </a>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;