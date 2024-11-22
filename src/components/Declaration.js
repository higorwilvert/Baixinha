import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import '../styles/Declaration.css';

const paragraphs = [
  "Minha Baixinha, minha vida,",
  "Hoje eu quero abrir meu coração e tentar colocar em palavras o tamanho do amor que sinto por você. É difícil, porque nenhum texto, por mais bonito que seja, consegue expressar tudo o que você significa pra mim.",
  "Desde o momento em que você entrou na minha vida, tudo ganhou um brilho diferente. Você transformou dias comuns em momentos inesquecíveis, e eu nunca imaginei que alguém poderia me fazer tão feliz assim.",
  "Você não é apenas a mulher dos meus sonhos, você é muito mais. É minha parceira, minha amiga, minha confidente, e a razão de eu querer ser uma pessoa melhor todos os dias.",
  "Eu amo cada pedacinho de você. O jeito que seus olhos brilham quando você sorri, o som da sua risada que parece música pra mim, a forma como você transforma até os momentos mais simples em memórias maravilhosas.",
  "Com você, eu encontrei uma paz que nunca soube que precisava. Você é minha calmaria nos dias difíceis, meu refúgio quando o mundo parece pesado.",
  "Eu quero passar a vida inteira ao seu lado, construindo nossas histórias, enfrentando os desafios juntos e celebrando cada conquista, grande ou pequena.",
  "Eu te amo mais do que consigo expressar, e esse amor só cresce a cada dia. Obrigado por ser você, por iluminar a minha vida e por ser a melhor parte de tudo.",
  "Te amo ontem, hoje e para sempre.",
];

function Declaration() {
  return (
    <div className="declaration">
      <div className="declaration-container">
        {paragraphs.map((text, index) => (
          <motion.div
            key={index}
            className="declaration-paragraph"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: index * 1, duration: 1 }} // Demora maior para aparecer
          >
            <p>{text}</p>
          </motion.div>
        ))}
      </div>
      <Link to="/gallery" className="btn-next">Momentos</Link>
    </div>
  );
}

export default Declaration;
