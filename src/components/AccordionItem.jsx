import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const AccordionItem = ({
    title,
    content,
    isOpen,
    onClick
}) => {
    return (
        <div className="border-b border-slate-200 last:border-none">
            <button
                onClick={onClick}
                aria-expanded={isOpen}
                className='flex items-center justify-between p-4 md:p-5 gap-4 text-left transition-colors hover:bg-slate-50 focus:outline-none w-full cursor-pointer'
            >
                <span className={`text-base md:text-xl font-semibold font-poppins leading-snug ${isOpen ? 'text-accent' : 'text-primary'}`}>
                    {title}
                </span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className='text-slate-500 shrink-0'
                >
                    <ChevronDown className='h-5 w-5' />
                </motion.div>
            </button>
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className='overflow-hidden'
                    >
                        <div className='px-4 md:px-5 pb-4 md:pb-5 pt-0 font-lato text-base md:text-lg font-medium text-secondary leading-relaxed'>
                            {content}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default AccordionItem;