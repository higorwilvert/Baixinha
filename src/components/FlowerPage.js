import React from 'react';
import '../styles/FlowerPage.css';

import Bouquet from '../Images/gerberaClip1.png';

function FlowerPage() {
  return (
    <div className="flower-page">
      {/* Mensagem no topo */}
      <div className="message">
        <h1>🌸 Obrigado por estar ao meu lado 💖</h1>
        <p>Você é a razão de todos os meus sorrisos. Te amo para sempre! 💕</p>
      </div>

      {/* Imagem do bouquet central */}
      <div className="bouquet-center">
        <img src={Bouquet} alt="Bouquet de flores" />
      </div>
    </div>
  );
}

export default FlowerPage;
