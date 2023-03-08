import './styles.css';

const GameOverScreen = ({ restart}) => {

  return (
    <div className='end'>
      <p>Game Over</p>
      <button onClick={restart}>Jogar Denovo</button>
    </div>
  );
}

export { GameOverScreen };
