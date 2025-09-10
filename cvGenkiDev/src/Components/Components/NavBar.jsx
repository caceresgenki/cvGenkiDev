import { useState } from 'react'
import '../../StyleCss/navBar.css'


function NavBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        }
        setIsMenuOpen(false); // Close menu after navigation
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return   (
    <>
      <nav className='navbar'>
        <div><a className='logo' href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>{`<GC/>`}</a></div>
        
        {/* Desktop Menu */}
        <div className='nav-menu desktop-menu'>
          <ul>
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Inicio</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre mí</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experiencia</a></li>
              <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Educación</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Habilidades</a></li>
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle mobile menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Mobile Menu Overlay */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'active' : ''}`}>
          <div className='mobile-menu'>
            <ul>
              <li><a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('hero'); }}>Inicio</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>Sobre mí</a></li>
              <li><a href="#experience" onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experiencia</a></li>
              <li><a href="#education" onClick={(e) => { e.preventDefault(); scrollToSection('education'); }}>Educación</a></li>
              <li><a href="#skills" onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Habilidades</a></li>
            </ul>
          </div>
        </div>

      </nav>
    </>)
   }



export default NavBar