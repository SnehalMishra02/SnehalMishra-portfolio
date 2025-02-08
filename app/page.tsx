import Hero from './components/Hero'
import Header from './components/Header';
import Skills from './components/Skills'
import Projects from './components/Projects';
import Timelinesection from './components/Timelinesection';
import Connect from './components/Connect';
import Footer from './components/Footer';
export default function Home() {
  return (
    <div>
      <Header></Header>
      <Hero/>
      <Skills/>
      <Projects /> 
      <Timelinesection />
      <Connect />
      <Footer/>
    </div>
  );
}
