import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">💚 Nosso Amor</Link>
      </div>
      <nav className="nav-links">
        <Link to="/">Início</Link>
        <Link to="/declaration">Declaração</Link>
        <Link to="/gallery">Galeria</Link>
        <Link to="/playlist">Playlist</Link>
        <Link to="/dreams">Sonhos</Link>
        <Link to="/final-message">Mensagem Final</Link>
      </nav>
    </header>
  );
}

export default Header;
