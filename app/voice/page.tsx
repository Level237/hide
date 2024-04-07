"use client"
import { useState } from 'react';

export default function Home() {
  const [text, setText] = useState('');

  const speak = (text:string) => {
    if ('speechSynthesis' in window) {
      const msg = new SpeechSynthesisUtterance();
      msg.text = text;
      msg.lang = 'fr-FR';
      window.speechSynthesis.speak(msg);
    } else {
      alert("Votre navigateur ne prend pas en charge la synthèse vocale.");
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Entrez du texte ici"
      />
      <button onClick={() => speak(text)}>Parler</button>
    </div>
  );
}
