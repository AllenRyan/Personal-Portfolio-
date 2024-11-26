import About from "./components/about";
import Experience from "./components/experience";
import Header from "./components/header";
import Hero from "./components/hero";
import Skills from "./components/skills";
import Work from "./components/work";
import Testimonials from "./components/testimonials";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Abrar's Portfolio";
  },[])
  return(
    <>
     <Header />
     <Hero />
     <About />
     <Skills />
     <Experience />
     <Work />
     <Testimonials />
     <Contact />
     <Footer />
    </>
  
  );
    
  
}

export default App
