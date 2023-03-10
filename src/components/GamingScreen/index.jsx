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
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Inserir!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras que você já tentou:</p>
        {wrongLetters.map((letter, i) => (
          <span key={i}>{letter}, </span>
        ))}
      </div>
      <button className='page-button' onClick={verifyLetter}>Finalizar o jogo</button>
    </div>
  );
}

export { GamingScreen };
