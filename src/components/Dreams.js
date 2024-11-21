import React from 'react';
import '../styles/Dreams.css';

const dreams = [
  { icon: "🏖️", title: "Viajar para a praia", description: "Sentir o som do mar e aproveitar juntos." },
  { icon: "🏡", title: "Construir nossa casa dos sonhos", description: "Um lar cheio de amor e alegria." },
  { icon: "🐶", title: "Adotar um pet", description: "Um novo amigo para fazer parte da nossa família." },
  { icon: "🌍", title: "Viajar pelo mundo", description: "Explorar novos lugares e criar memórias." },
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
    </div>
  );
}

export default Dreams;
