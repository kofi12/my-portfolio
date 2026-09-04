import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import Symptoms from '../components/Symptoms';
import Triggers from '../components/Triggers';
import Checks from '../components/Checks';
import Services from '../components/Services';
import Process from '../components/Process';
import About from '../components/About';
import Proof from '../components/Proof';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Marquee />
      <Symptoms />
      <Triggers />
      <Checks />
      <Services />
      <Process />
      <About />
      <Proof />
      <FAQ />
      <Contact />
    </>
  );
}
