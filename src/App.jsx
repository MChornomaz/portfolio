import { useCallback, useState } from 'react';
import './app.scss'
import Contact from './components/contact/Contact';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Skills from './components/skills/Skills';

const App = () => {

  const [needScroll, setNeedScroll] = useState(false)

  const needScrollHandler = useCallback((value) => {
    setNeedScroll(value)
  }, [])

  return <div>
    <section id='Homepage'>
      <Navbar />
      <Hero/>
    </section>
    <section id='Skills'>
      <Parallax type="skills"/>
    </section>
    <section>
      <Skills />
    </section>
    <section id='Portfolio'>
      <Parallax type="Portfolio" />
    </section>
    <Portfolio needScroll={needScroll} setNeedScroll={needScrollHandler} />
    <section id='Contact'>
      <Contact />
    </section>
  </div>;
};

export default App;
