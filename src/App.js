import React from 'react';
import Motion from './Motion'

import './App.scss';
import { Navbar } from './components';
import { About, Footer, Header, Skills, Testimonial, Work } from './container/index';




const App = () => (
  <div className="app">
    <Navbar />
      <Header />
      <About/>
      <Work/>
      <Skills />
      <Footer />
  </div>
);

export default App;