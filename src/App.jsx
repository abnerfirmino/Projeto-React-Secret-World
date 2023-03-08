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
  const [gameStage, setGameStage] = useState(stages[0].stage);
  const [words] = useState(wordsList);

  const handleStartScreen = () => {
    setGameStage(stages[1].stage);
  }

  const verifyWord = () => {
    setGameStage(stages[2].stage);
  }

  const restartGame = () => {
    setGameStage(stages[0].stage);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen handleClick={handleStartScreen} />}
      {gameStage === "gaming" && <GamingScreen verifyWord={verifyWord}/>}
      {gameStage === "end" && <GameOverScreen restart={restartGame}/>}
    </div>
  );
}

export default App;
