import { useState, useRef } from 'react';
import './styles.css';

const GamingScreen = ({ 
  verifyLetter, 
  pickedWord, 
  pickedCategory, 
  letters, 
  guessedLetters,
  wrongLetters,
  guesses,
  score 
}) => {
  const [userLetter, setUserLetter] = useState("");
  const letterInput = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    verifyLetter(userLetter);
    
    letterInput.current.focus();
    setUserLetter("");
  }

  return (
    <div className='gaming'>
      <p className='points'>
        <span>Sua pontuação: {score}</span>
      </p>
      <h2>Adivinhe a palavra:</h2>
      <h3 className='tip'>
        Dica sobre a palavra: <span>{pickedCategory}</span>
      </h3>
      <p>Você tem <span className='guesses'>{guesses}</span> tentativa(s).</p>
      <div className="wordContainer">
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? 
            <span key={i} className="letter">{letter}</span> : 
            <span key={i} className="blankSquare"></span>
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            name="letter" 
            maxLength="1" 
            required 
            onChange={(e) => setUserLetter(e.target.value)}
            value={userLetter} 
            ref={letterInput}
            />
          <button>Inserir!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras que você já tentou:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
    </div>
  );
}

export { GamingScreen };
