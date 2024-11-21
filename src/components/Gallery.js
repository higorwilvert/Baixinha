import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Gallery.css';

// Importando todas as imagens manualmente
import img1 from '../Images/1.jpeg';
import img2 from '../Images/2.jpeg';
import img3 from '../Images/3.jpeg';
import img4 from '../Images/4.jpeg';
import img5 from '../Images/5.jpeg';
import img6 from '../Images/6.jpeg';
import img7 from '../Images/7.jpeg';
import img8 from '../Images/8.jpeg';
import img9 from '../Images/9.jpeg';
import img10 from '../Images/10.jpeg';
import img11 from '../Images/11.jpeg';
import img12 from '../Images/12.jpeg';

const messages = [
    "Te amo mais que tudo ❤️",
    "Cada momento com você é especial 🥰",
    "Meu coração é todo seu 💕",
    "Você é meu porto seguro 🌟",
    "Amar você é minha alegria 💖",
    "Você é minha melhor escolha 🥰",
    "Ao seu lado sou mais feliz 😘",
    "Minha baixinha, minha vida 🌹",
    "Você é meu sonho realizado 💞",
    "Obrigada por ser você 💕",
    "Quero estar com você para sempre ❤️",
    "Você é a melhor parte de mim 💖",
  ];

const photos = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];

function Gallery() {
    return (
      <div className="gallery">
        <h2>Nossos Momentos</h2>
        <div className="gallery-grid">
          {photos.map((photo, index) => (
            <div className="polaroid" key={index}>
              <img src={photo} alt={`Momento ${index + 1}`} />
              <p>{messages[index]}</p> {/* Adiciona a mensagem correspondente */}
            </div>
          ))}
        </div>
        <Link to="/final-message" className="btn-next">Mensagem Final</Link>
      </div>
    );
  }
  
  export default Gallery;