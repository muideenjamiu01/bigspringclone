import React from 'react';
import Navbar from './components/Navbar';
import pageCircle from './components/pageCircle';
import pageShapes from './components/pageShapes';
import homeHeader from './components/homeHeader';
import Step from './components/Step';
import phoneSlider from './components/phoneSlider';
import Quote from './components/Quote';
import Limitation from './components/limitation';
import Corporate from './components/Corporate';
import Client from './components/clients';
import Contact from './components/contact';
import Footer from './components/footer';

import './App.css';
import './client.css';
import './corporate.css'



  const App = () => {
    return (
        <div>
           <Navbar></Navbar>
           <pageCircle/>
           <pageShapes />
           <homeHeader />
           <Step />
           <phoneSlider />
           <Quote />
           <Limitation />
           <Corporate />
           <Client />
           <Contact />
           <Footer />
           
        </div>
            
    );
};
export default App;

