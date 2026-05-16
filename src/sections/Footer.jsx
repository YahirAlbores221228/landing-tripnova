import contact from '../data/contact';
import navlinks from '../data/navlinks';
import sociallinks from '../data/sociallink';
import SocialLinks from '../components/footer/Sociallinks';
import FooterColumn from '../components/footer/Footercolumn';

const Footer = () => {
    return (
        <footer className="bg-primary text-gray-200">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
                    <FooterColumn title="Contacto">
                        <ul className="space-y-3 text-sm md:text-base">
                            {contact.map((contact, index) => (
                                <li key={index} className="flex items-center gap-3">
                                    <contact.icon className='text-white h-4 w-4' />
                                    <a href={contact.href} className="hover:text-white transition-colors break-all">{contact.value}</a>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>
                    <FooterColumn title="Ubicación">
                        <div className='flex items-start gap-3 text-sm md:text-base'>
                            <p>Tuxtla Gutierrez, Chiapas, México</p>
                        </div>
                    </FooterColumn>
                    <FooterColumn title="Enlaces">
                        <ul className="space-y-2 text-sm md:text-base">
                            {navlinks.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-white transition-colors underline-offset-4 hover:underline">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </FooterColumn>
                    <FooterColumn title="Siguenos">
                        <p className='mb-4 text-sm leading-relaxed'>Conéctate con nosotros en nuestras plataformas digitales.</p>
                        <SocialLinks
                            items={sociallinks}
                        />
                    </FooterColumn>
                </div>
                <div className='mt-12 border-t border-gray-700 pt-8'>
                    <div className='flex flex-col items-center justify-between gap-4 md:flex-row text-center md:text-left'>
                        <p className='text-sm text-secondary'>&copy; 2026 TripNova. Todos los derechos reservados.</p>
                        <div className='flex gap-4 md:gap-6 text-sm text-secondary'>
                            <a href="#" className="hover:text-white transition-colors">Política de privacidad</a>
                            <a href="#" className="hover:text-white transition-colors">Términos de servicio</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;