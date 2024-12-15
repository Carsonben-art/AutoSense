import About from "./components/About";
import Benefits from "./components/Benefits";
import BlogSection from "./components/Blogs";
import Contacts from "./components/Contacts";
import FeaturesSection from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Nav from "./components/Nav";
import PricingSection from "./components/PricingSection";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import WhyUs from "./components/WhyUs";


function App() {
  return (
    <div>
      <Nav />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="why-us">
        <WhyUs />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="benefits">
        <Benefits />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="pricing">
        <PricingSection />
      </section>
      <section id="blogs">
        <BlogSection />
      </section>
      <section id="contact">
        <Contacts />
      </section>
      <Footer />
    </div>
  );
}

export default App;
