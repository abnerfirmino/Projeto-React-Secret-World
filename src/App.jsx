// componentes
import { StartScreen } from './components/StartScreen';
import { GamingScreen } from './components/GamingScreen';
import { GameOverScreen } from './components/GameOverScreen';

// hooks
import { useCallback, useEffect, useState } from 'react';

// import dos dados
import { wordsList } from './data/words';

// estágios de progressão da página
const stages = [
  {id: 1, stage: "start"},
  {id: 2, stage: "gaming"},
  {id: 3, stage: "end"},
]

function App() {
  // estados da APP
  const [gameStage, setGameStage] = useState(stages[0].stage);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  // função para gerar categoria e palavra aleatória
  const pickCategoryAndWord = () => {
    // sorteando uma categoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // sorteando uma palavra da categoria escolhida
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word }
  }

  // função que inicia o jogo
  const startGame = () => {
    const { category, word } = pickCategoryAndWord();
    console.log(category, word);

    setGameStage(stages[1].stage);
  }

  // função que verifica as letras
  const verifyLetter = () => {
    setGameStage(stages[2].stage);
  }

  // função que reiniciar o jogo
  const restartGame = () => {
    setGameStage(stages[0].stage);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen handleStart={startGame} />}
      {gameStage === "gaming" && <GamingScreen verifyLetter={verifyLetter}/>}
      {gameStage === "end" && <GameOverScreen restart={restartGame}/>}
    </div>
  );
}

export default App;
