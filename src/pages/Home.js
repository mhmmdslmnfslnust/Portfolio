import { motion } from 'framer-motion';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Projects from '../components/sections/Projects';
import Skills from '../components/sections/Skills';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      // transition={{ duration: 0.5 }}
      transition={{ duration: 2, ease: 'easeInOut' }}
    >
      <Hero />
      <About />
      <Projects />
      <Skills />
      {/* <Experience /> */}
      <Contact />
    </motion.div>
  );
};

export default Home;
