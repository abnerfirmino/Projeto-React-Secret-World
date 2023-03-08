import { StartScreen } from './components/StartScreen';
import { GamingScreen } from './components/GamingScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { useCallback, useEffect, useState } from 'react';

// import dos dados
import { wordsList } from './data/words';

// estágios de progressão da página
const stages = [
  {id: 1, stage: "start"},
  {id: 2, stage: "game"},
  {id: 3, stage: "end"},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].stage);
  const [words] = useState(wordsList);

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen />}
      {gameStage === "game" && <GamingScreen />}
      {gameStage === "end" && <GameOverScreen />}
    </div>
  );
}

export default App;
