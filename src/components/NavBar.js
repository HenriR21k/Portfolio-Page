import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";


export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
         <Container>
           <Navbar.Toggle aria-controls="basic-navbar-nav">
              <span className="navbar-toggler-icon"></span>
           </Navbar.Toggle> 
           <Navbar.Collapse id="basic-navbar-nav">
             <Nav className="ms-auto">
               <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
               <Nav.Link href="#aboutme" className={activeLink === 'aboutme' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('aboutme')}>About Me</Nav.Link>
               <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
               <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
             </Nav>
             <span className="navbar-text">
               <Nav.Link href="#connect">
                 <button className="vvd"><span>Let’s Connect</span></button>
               </Nav.Link>
             </span>
          </Navbar.Collapse>
         </Container>
       </Navbar>
  );
};
