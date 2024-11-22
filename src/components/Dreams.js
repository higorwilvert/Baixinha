import React from 'react';
import '../styles/Dreams.css';
import { Link } from 'react-router-dom';  

const dreams = [
  { 
    icon: "🏡", 
    title: "Construir nossa casa dos sonhos", 
    description: "Um lar cheio de amor, alegria e conforto para nossa família." 
  },
  { 
    icon: "🐶", 
    title: "Ter nossos cachorros", 
    description: "Cuidar de nossos amigos peludos que trarão alegria para nossa casa." 
  },
  { 
    icon: "🌍", 
    title: "Viajar pelo mundo", 
    description: "Explorar novos lugares, culturas e criar memórias únicas juntos." 
  },
  { 
    icon: "👶", 
    title: "Ter filhos", 
    description: "Pra alegrar nossas vidas e completar nossa família." 
  },
  { 
    icon: "🏘️", 
    title: "Morar em um condomínio", 
    description: "Viver com segurança, tranquilidade e uma boa vizinhança." 
  },
  { 
    icon: "🍁", 
    title: "Viver no Canadá", 
    description: "Experimentar a vida em outro país, aprender e crescer juntos." 
  },
  { 
    icon: "💰", 
    title: "Ser bem de vida", 
    description: "Construir uma vida financeira estável e confortável para nossa família." 
  },
];


function Dreams() {
  return (
    <div className="dreams">
      <h1>Sonhos Futuros 🌟</h1>
      <div className="dreams-grid">
        {dreams.map((dream, index) => (
          <div key={index} className="dream-card">
            <span className="dream-icon">{dream.icon}</span>
            <h3>{dream.title}</h3>
            <p>{dream.description}</p>
          </div>
        ))}
      </div>

      <Link to="/final-message" className="btn-next">Mensagem Final</Link>
    </div>
  );
}

export default Dreams;
