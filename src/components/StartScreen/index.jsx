import './styles.css';

const StartScreen = ({ handleStart }) => {
  return (
    <div className='start'>
      <h1>Secret Word</h1>
      <p>Clique no botão abaixo para começar a jogar</p>
      <button onClick={handleStart}>Começar o jogo</button>
    </div>
  );
}

export { StartScreen };
