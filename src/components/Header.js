import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">💚 Minha Baixinha</Link>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link></li>
          <li><Link to="/declaration" onClick={() => setIsMenuOpen(false)}>Declaração</Link></li>
          <li><Link to="/gallery" onClick={() => setIsMenuOpen(false)}>Galeria</Link></li>
          <li><Link to="/playlist" onClick={() => setIsMenuOpen(false)}>Playlist</Link></li>
          <li><Link to="/dreams" onClick={() => setIsMenuOpen(false)}>Sonhos</Link></li>
          <li><Link to="/final-message" onClick={() => setIsMenuOpen(false)}>Mensagem Final</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
