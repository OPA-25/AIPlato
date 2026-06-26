import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Companies from "./components/Companies/Companies";
import Stats from "./components/Stats/Stats";
import Workflow from "./components/Workflow/Workflow";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Testimonials from "./components/Testimonials/Testimonials";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Companies />
      <Stats />
      <Workflow />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
 
    </>
  );
}

export default App;