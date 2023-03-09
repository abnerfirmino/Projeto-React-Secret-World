import './styles.css';

const GamingScreen = ({ verifyLetter }) => {

  return (
    <div className='gaming'>
      <p>I'm playing</p>
      <button onClick={verifyWord}>Finalizar o jogo</button>
    </div>
  );
}

export { GamingScreen };
