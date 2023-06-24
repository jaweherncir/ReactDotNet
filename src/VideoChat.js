import React, { useState, useRef } from 'react';
import './VideoChat.css'; // Import du fichier CSS pour le styling

function VideoChat() {
  const [connected, setConnected] = useState(false); // État pour savoir si l'utilisateur est connecté
  const [videoStarted, setVideoStarted] = useState(false); // État pour savoir si la vidéo est démarrée
  const videoRef = useRef(null); // Référence au composant vidéo

  const handleConnect = () => {
    // Code pour se connecter au chat vidéo
    setConnected(true);
  };

  const handleStartVideo = () => {
    // Code pour démarrer la vidéo
    setVideoStarted(true);
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream; // Utilisation de la référence pour afficher la vidéo
      })
      .catch((error) => {
        console.error('Error accessing media devices.', error);
      });
  };

  return (
    <div className="video-chat-container">
      <h1 className="video-chat-title">Passer le test technique avec un chat vidéo</h1>
      {!connected && (
        <div className="video-chat-connect">
          <button onClick={handleConnect}>Se connecter</button>
        </div>
      )}
      {connected && !videoStarted && (
        <div className="video-chat-start">
          <button onClick={handleStartVideo}>Démarrer la vidéo</button>
        </div>
      )}
      {connected && videoStarted && (
        <div className="video-chat-video">
          <video ref={videoRef} autoPlay muted></video> {/* Utilisation de la référence */}
        </div>
      )}
    </div>
  );
}

export default VideoChat;
