import {useState} from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('About');


  return (
    <div className="App">
      
      <Navbar
        setCurrentPage={setCurrentPage}
      />
      {currentPage === 'About' ? (
        <About /> 
      ) : currentPage === 'Portfolio' ?
      (<Portfolio />) : currentPage === 'Contact' ?
      (<Contact />) :
      (<Resume />)
      }
        
      <Footer />
    </div>
    
  );
}

export default App;
