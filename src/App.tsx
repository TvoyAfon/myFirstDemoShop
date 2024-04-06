import Navbar from './components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection';
import Services from './components/Services/Services.js';
import SignUp from './components/SignUp/SignUp.js';
import Products from './components/Products/Products.tsx'
import Cart from './components/Cart/Cart.tsx';
import Footer from './components/Footer/Footer.js';

import {
  BrowserRouter as Router,
  Route,Routes,
} from 'react-router-dom';
import CardsProvider from './components/providers/CardsProvider.tsx';

function App() {
  return ( 
     <>
     <Router>
      <CardsProvider>
        <div className='flex flex-col' style={{height: '100svh'}}>
          <Navbar/>
          <main className='flex-grow'>
            <Routes>
              <Route path="/" Component={HeroSection} />
              <Route path='/products' Component={Products}/>
              <Route path='/sign-up' Component={SignUp}/>
              <Route path='/services' Component={Services}/>
              <Route path='/cart' Component={Cart}/>
          </Routes>
          </main>
          <Footer/>
        </div>
      </CardsProvider> 
     </Router>    
     </>
        
  )
  
}

export default App
