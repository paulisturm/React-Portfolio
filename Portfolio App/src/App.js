import {useState} from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Navbar from './components/Navbar';


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
        
       
        
       
      <footer>
        links
      </footer>
    </div>
    
  );
}

export default App;
