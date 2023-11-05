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


const App = () => {


  
  return (
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}/>
      </Routes>
    </BrowserRouter>
  
);
}




export default App;
