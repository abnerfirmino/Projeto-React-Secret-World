import './styles.css';

const GamingScreen = ({ verifyLetter }) => {

  return (
    <div className='gaming'>
      <p className='points'>
        <span>Pontuação: 000</span>
      </p>
      <h2>Adivinhe a palavra:</h2>
      <h3 className='tip'>
        Dica sobre a palavra: <span>Dica...</span>
      </h3>
      <div className="wordContainer">
        <span className="letter">A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente adivinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required />
          <button>Inserir!</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
        <span>a, </span>
        <span>b, </span>
      </div>
      <button onClick={verifyLetter}>Finalizar o jogo</button>
    </div>
  );
}

export { GamingScreen };
