import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Symptoms from '../components/Symptoms';
import Checks from '../components/Checks';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import CaseStudies from '../components/CaseStudies';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Symptoms />
      <Checks />
      <Services />
      <Process />
      <About />
      <CaseStudies />
      <Contact />
    </>
  );
}
