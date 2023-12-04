import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Products from './components/Products';
import Place from './components/Place';
import Projects from './components/Projects';
import Footer from './components/Footer';
// import Error from './components/Error';


function App() {
  return <>
       <Header />
       <main className='main'>
        <Hero />
        <Services />
        <Products />
        <Place/>
        <Projects/>
        {/* <Error/> */}
        
       </main>
       <Footer/>
     </>
  ;
}

export default App;
