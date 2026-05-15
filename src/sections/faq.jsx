import { useState } from 'react';

import faqs from "../data/faqs";
import AccordionItem from "../components/accordionItem";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="py-16 md:py-24 lg:py-32 px-4 md:px-8">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10 md:mb-16 max-w-3xl mx-auto">
                    <span className="font-lato text-xs sm:text-sm font-semibold text-accent uppercase tracking-wide">
                        Faq
                    </span>
                    <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl text-primary font-poppins font-bold leading-tight">Preguntas frecuentes</h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem
                            key={index}
                            title={faq.q}
                            content={faq.a}
                            isOpen={openIndex === index}
                            onClick={() => handleToggle(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Faq;