import { NavBar } from "./components/NavBar";
import { AboutMe } from './components/AboutMe';
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

import ReactGA from 'react-ga';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const Layout = () => {
    // Properties ----------------------------
    // Hooks ---------------------------------
    // Context -------------------------------
   
    // Methods -------------------------------
    // View ---------------------------------

    return (
        <>
            <NavBar />
            <Banner/>
            <AboutMe />
            <Skills />
            <Projects />
            <Contact />
            <Footer />
        </>
    )

}

export default Layout;