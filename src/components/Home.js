import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home">
      <div className="background-animation"></div>
      <div className="home-content">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <h1>5 Meses de Nós 💚</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          <p>
            Hoje celebramos 5 meses de risadas e memórias incríveis. Este site
            é um pequeno presente para te mostrar o quanto você é especial na minha vida.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <Link to="/declaration" className="btn-next">
            Uma Mensagem para vc! 💕
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default Home;
