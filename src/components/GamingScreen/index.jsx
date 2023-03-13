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
  const [formError, setFormError] = useState("");
  const [userLetter, setUserLetter] = useState("");
  const letterInput = useRef(null);

  // função para validar os dados do formulário
  const validateForm = (letter) => {
    let regex = /[a-záéíóúãõâêôçà]/i;

    if (!regex.test(letter)) {
      setFormError('ERRO! Digite somente letras.');
    }
  }

  // função para tratar o submit
  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(userLetter);
    verifyLetter(userLetter);
    
    letterInput.current.focus();
    setUserLetter("");
  }

  return (
    <div className='gaming'>
      <p className='points'>
        Sua pontuação é: <span>{score}</span>
      </p>
      <h2>Tente adivinhar!</h2>
      <p className='description'>Para ganhar 10 pontos adivinhe uma palavra.</p>
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
        <p>Tente adivinhar uma letra:</p>
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
          <span className='error'>{formError}</span>
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
