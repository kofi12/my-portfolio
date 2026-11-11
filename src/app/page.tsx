import Hero from '../components/Hero';
import Services from '../components/Services';
import Automations from '../components/Automations';
import Transformation from '../components/Transformation';
import AppAudits from '../components/AppAudits';
import Process from '../components/Process';
import About from '../components/About';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Automations />
      <Transformation />
      <AppAudits />
      <Process />
      <About />
      <FAQ />
      <Contact />
    </>
  );
}
