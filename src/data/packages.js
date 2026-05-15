import cancun from '../assets/images/packages/cancun.webp';
import paris from '../assets/images/packages/paris.webp';
import tour from '../assets/images/packages/tour.webp';
import oaxaca from '../assets/images/packages/oaxaca.webp';
import chiapas from '../assets/images/packages/chiapas.webp';
import peru from '../assets/images/packages/peru.webp';
import orlando from '../assets/images/packages/orlando.webp';
import cdmx from '../assets/images/packages/cdmx.webp';

const packages = [
  {
    id: 1,
    name: "Luna de Miel en Cancún",
    destination: "Cancún, México",
    duration: "7 días / 6 noches",
    price: 1850,
    description: "Vive una experiencia romántica única en las playas paradisíacas de Cancún con todo incluido.",
    category: "romance",
    rating: 4.9,
    image: cancun
  },
  {
    id: 2,
    name: "Escapada Romántica a París",
    destination: "París, Francia",
    duration: "6 días / 5 noches",
    price: 2800,
    description: "Descubre la ciudad del amor con paseos por el Sena, la Torre Eiffel y gastronomía francesa.",
    category: "romance",
    rating: 4.7,
    image: paris
  },
  {
    id: 3,
    name: "Tour Cultural por Europa",
    destination: "París · Roma · Barcelona",
    duration: "12 días / 11 noches",
    price: 3490,
    description: "Recorre las ciudades más emblemáticas de Europa, su historia, arte y arquitectura.",
    category: "cultura",
    rating: 4.8,
    image: tour
  },
  {
    id: 4,
    name: "Magia de Oaxaca",
    destination: "Oaxaca, México",
    duration: "5 días / 4 noches",
    price: 800,
    description: "Sumérgete en la cultura, gastronomía y tradiciones del estado más mágico de México.",
    category: "cultura",
    rating: 4.6,
    image: oaxaca
  },
  {
    id: 5,
    name: "Maravillas de Chiapas",
    destination: "Cañon del Sumidero · San Cristóbal",
    duration: "5 días / 4 noches",
    price: 1620,
    description: "Recorrido en lancha por el imponente Cañón del Sumidero, selva mística y pueblos mágicos.",
    category: "aventura",
    rating: 4.7,
    image: chiapas
  },
  {
    id: 6,
    name: "Trekking en Machu Picchu",
    destination: "Cusco, Perú",
    duration: "9 días / 8 noches",
    price: 2600,
    description: "Una aventura inolvidable recorriendo el Camino Inca hasta la majestuosa ciudadela.",
    category: "aventura",
    rating: 4.9,
    image: peru
  },
  {
    id: 7,
    name: "Viaje Familiar a Orlando",
    destination: "Orlando, EE. UU.",
    duration: "7 días / 6 noches",
    price: 2150,
    description: "La aventura perfecta para toda la familia con acceso a los mejores parques temáticos.",
    category: "familiar",
    rating: 4.8,
    image: orlando
  },
  {
    id: 8,
    name: "Explorando Ciudad de México",
    destination: "Ciudad de México",
    duration: "4 días / 3 noches",
    price: 600,
    description: "Descubre la riqueza cultural, gastronómica e histórica de la capital mexicana.",
    category: "familiar",
    rating: 4.5,
    image: cdmx
  },
]

export default packages;