import React from 'react';
import { motion } from 'framer-motion';
import '../styles/FinalMessage.css';
import { Link } from 'react-router-dom';

function FinalMessage() {
  return (
    <div className="final-message">
      <div className="background-animation"></div>
      <motion.div
        className="message-content"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <h1>Vamos continuar criando memórias juntos?</h1>
        <p>Você é a melhor parte da minha vida. Te amo hoje, amanhã e para sempre.</p>
        <Link to="/flower" className="btn-finish">Pra Não Perder o Costume</Link>
      </motion.div>
    </div>
  );
}

export default FinalMessage;
