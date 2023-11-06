import React from 'react';
import ReactDOM from 'react-dom';
import Cards from './homeDashboard/Cards'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Nav from'./homeDashboard/Nav'
import Footer from './homeDashboard/Footer'; 
ReactDOM.render(
  <React.StrictMode>
    <Nav />

    <Cards />
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
);
