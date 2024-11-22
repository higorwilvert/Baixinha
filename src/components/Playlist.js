import React from 'react';
import '../styles/Playlist.css';
import { Link } from 'react-router-dom';

function Playlist() {
  return (
    <div className="playlist">
      <h1>Nossa Trilha Sonora 🎶</h1>
      <p>Essas músicas marcaram momentos especiais da nossa história:</p>
      <div className="songs-list">
        <div className="song-card">
          <h2>Mastermind</h2>
          <h3>Taylor Swift</h3>
          <p>A música que você escutava quando nos conhecemos, e que faz lembrar de mim.</p>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/56hioFjQ0DXrdn04hZcFgG?utm_source=oembed"
              style={{ width: "100%", height: "100%", border: 0 }}
              allowFullScreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>

        <div className="song-card">
          <h2>Feel It</h2>
          <h3>D4vd</h3>
          <p>Minha trilha sonora que escutava quando nos conhecemos, agora cheia de memórias com você.</p>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/3SAga35lAPYdjj3qyfEsCF?utm_source=oembed"
              style={{ width: "100%", height: "100%", border: 0 }}
              allowFullScreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>

        <div className="song-card">
          <h2>Saturn</h2>
          <h3>SZA</h3>
          <p>A música que estava tocando em nosso primeiro beijo e sempre lembro de você quando ela toca.</p>
          <div className="spotify-embed">
            <iframe
              src="https://open.spotify.com/embed/track/1bjeWoagtHmUKputLVyDxQ?utm_source=oembed"
              style={{ width: "100%", height: "100%", border: 0 }}
              allowFullScreen
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
        </div>
      </div>

      <Link to="/dreams" className="btn-next">Sonhos</Link>
    </div>
  );
}

export default Playlist;
