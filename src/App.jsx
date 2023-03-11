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

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [guesses, setGuesses] = useState(3);
  const [score, setScore] = useState(0);

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
    
    // dividindo a palavra sorteada em letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);
    setGameStage(stages[1].stage);
  }

  // função que verifica as letras
  const verifyLetter = (userLetter) => {
    const normalizedLetter = userLetter.toLowerCase();

    // verifica se o usuário já tentou aquela letra
    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return;
    }

    // adicionando ou removendo as letras adivinhadas
    if (letters.includes(normalizedLetter)) {
      setGuessedLetters((guessed) => [...guessed, normalizedLetter]);
    } else {
      setWrongLetters((wrongs) => [...wrongs, normalizedLetter]);
    }

    setGuesses(guesses - 1);
  }

  // limpa os estados das letters
  const clearLetterStates = () => {
    setGuessedLetters([]);
    setWrongLetters([]);
  }

  // monitoramento das tentativas (guesses)
  useEffect(() => {
    if (guesses <= 0) {
      clearLetterStates();

      setGameStage(stages[2].stage);
    }
  }, [guesses]);

  // função que reiniciar o jogo
  const restartGame = () => {
    setGuesses(3);
    setScore(0);

    setGameStage(stages[0].stage);
  }

  return (
    <div className="App">
      {gameStage === "start" && <StartScreen handleStart={startGame} />}
      {gameStage === "gaming" && 
        <GamingScreen
          pickedCategory={pickedCategory} 
          pickedWord={pickedWord} 
          letters={letters} 
          guessedLetters={guessedLetters} 
          wrongLetters={wrongLetters} 
          guesses={guesses} 
          score={score}
          verifyLetter={verifyLetter}
        />}
      {gameStage === "end" && <GameOverScreen restart={restartGame}/>}
    </div>
  );
}

export default App;
