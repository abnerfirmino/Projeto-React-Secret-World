import './styles.css';

const GameOverScreen = ({ restart }) => {

  return (
    <div className='end'>
      <p>Game Over</p>
      <button onClick={restart}>Reiniciar o jogo</button>
    </div>
  );
}

export { GameOverScreen };
