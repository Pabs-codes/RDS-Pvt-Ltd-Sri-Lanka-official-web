import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Place from './components/Place';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

// import Error from './components/Error';


function App() {
  return <>
      <Navbar/>
       <main className='main'>
        <Hero />
        <Services />
        <Products />
        <Place/>
        <Projects/>
        <Contact/>
        {/* <Error/> */}
        
       </main>
       <Footer/>
     </>
  ;
}

export default App;
