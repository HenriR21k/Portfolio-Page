import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { AboutMe } from './components/AboutMe';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Layout from './layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const TRACKING_ID = "G-Q9V17TZXVQ";
ReactGA.initialize(TRACKING_ID);





const App = () => {

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: window.location.pathname + window.location.search,
      title: "Home Page",
    });

  }, [])


  
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  
);
}




export default App;
