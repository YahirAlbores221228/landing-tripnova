import Header from "./sections/Header"
import Hero from "./sections/Hero";
import About from "./sections/About";
import Packages from "./sections/Packages";
import Destinations from "./sections/Destinations";
import Testimonials from "./sections/Testimonials";
import Faq from "./sections/Faq";
import Footer from "./sections/Footer";

function App() {

  return (
    <main className=''>
        <Header />
        <Hero />
        <About />
        <Packages />
        <Destinations />
        <Testimonials />
        <Faq />
        <Footer />
    </main>
  )
}

export default App