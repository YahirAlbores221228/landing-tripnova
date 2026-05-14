import { useState } from "react";

import navLinks from "../data/navlinks";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
                <span className="text-xl font-bold font-poppins">
                    Trip<span className="text-accent">Nova</span>
                </span>
                <nav className="hidden gap-6 md:flex">
                    {navLinks.map((link) => (
                        <a
                            key={link.id}
                            href={link.href}
                            className="text-primary font-poppins text-sm hover:text-accent transition-colors duration-300">
                            {link.label}
                        </a>
                    ))}
                </nav>
                <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? 'X' : '☰'}
                </button>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="flex flex-col gap-4 bg-white p-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.id}
                                href={link.href}
                                className="text-gray-600 font-poppins text-sm hover:text-blue-600 transition-colors duration-300">
                                {link.label}
                            </a>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;