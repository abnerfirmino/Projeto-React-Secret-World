import './styles.css';

const GameOverScreen = ({ restart, score, hits }) => {

  return (
    <div className='end'>
      <h2>Fim de Jogo</h2>
      <h3>Sua pontuação foi: <span className='score'>{score}</span></h3>
      <p>Você acertou <span className='guesses'>{hits}</span> palavra(as)</p>
      <button onClick={restart}>Reiniciar o jogo</button>
    </div>
  );
}

export { GameOverScreen };
