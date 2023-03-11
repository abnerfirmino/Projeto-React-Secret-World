import './styles.css';

const GameOverScreen = ({ restart, score }) => {

  return (
    <div className='end'>
      <h2>Fim de Jogo</h2>
      <h3>A sua pontuação foi: <span className='score'>{score}</span></h3>
      <button onClick={restart}>Reiniciar o jogo</button>
    </div>
  );
}

export { GameOverScreen };
