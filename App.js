import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Abaut from './pages/abaut';
import Contact from './pages/contact';
import Servicii from './pages/servicii';
import Produse from './pages/produse';
import Footer from './components/Footer';




function App() {
  return (
    <>
   
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact  component={Produse} />
        <Route path='/abaut'  component={Abaut} />
        <Route path='/servicii'  component={Servicii} />
        <Route path='/'  exact component={Produse} />
        <Route path='/contact'  component={Contact} />
      </Switch>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
