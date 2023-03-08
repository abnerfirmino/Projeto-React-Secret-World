import './styles.css';

const GamingScreen = ({ verifyWord }) => {

  return (
    <div className='gaming'>
      <p>I'm playing</p>
      <button onClick={verifyWord}>Finalizar o jogo</button>
    </div>
  );
}

export { GamingScreen };
