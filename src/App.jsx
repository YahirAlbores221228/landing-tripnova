import Header from "./sections/header"
import Hero from "./sections/hero";
import About from "./sections/about";
import Packages from "./sections/packages";
import Destinations from "./sections/Destinations";
import Testimonials from "./sections/testimonials";
import Faq from "./sections/faq";
import Footer from "./sections/footer";

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