import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Declaration from './components/Declaration';
import Gallery from './components/Gallery';
import FinalMessage from './components/FinalMessage';
import Header from './components/Header';
import Playlist from './components/Playlist';
import Dreams from './components/Dreams';
import FlowerPage from './components/FlowerPage';


function App() {
  return (
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/declaration" element={<Declaration />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/final-message" element={<FinalMessage />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/dreams" element={<Dreams />} />
          <Route path="/flower" element={<FlowerPage />} />
        </Routes>
    </Router>
  );
}

export default App;
