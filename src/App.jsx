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
];

function App() {
  // estados da APP
  const [gameStage, setGameStage] = useState(stages[0].stage);
  const [words] = useState(wordsList);
  const [pickedWord, setPickedWord] = useState("");
  const [pickedCategory, setPickedCategory] = useState("");
  const [letters, setLetters] = useState([]);

  const [guessedLetters, setGuessedLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);

  const [guesses, setGuesses] = useState(10);
  const [score, setScore] = useState(0);
  // acertos
  const [hits, setHits] = useState(0);

  // função para gerar categoria e palavra aleatória
  const pickCategoryAndWord = useCallback(() => {
    // sorteando uma categoria
    const categories = Object.keys(words);
    const category = categories[Math.floor(Math.random() * categories.length)];

    // sorteando uma palavra da categoria escolhida
    const word = words[category][Math.floor(Math.random() * words[category].length)];

    return { category, word }
  }, [words]);

  // função que inicia o jogo
  const startGame = useCallback(() => {
    const { category, word } = pickCategoryAndWord();
    
    // dividindo a palavra sorteada em letras
    let wordLetters = word.split("");
    wordLetters = wordLetters.map((letter) => letter.toLowerCase());

    setPickedCategory(category);
    setPickedWord(word);
    setLetters(wordLetters);

    //limpa as letras se existirem
    clearLetterStates();

    setGameStage(stages[1].stage);
  }, [pickCategoryAndWord]);

  // função que verifica as letras
  const verifyLetter = (userLetter) => {
    let regex = /[a-záéíóúãõâêôçà]/i;
    if (!regex.test(userLetter)) {
      return;
    }

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
      setGuesses(guesses - 1);
    }
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

  // monitoramento da condição de vitória
  const compareArrays = (a, b) => {
    if(a.sort().toString() === b.sort().toString()) {
      return true;
    }
  }

  useEffect(() => {
    const uniqueLetters = [...new Set(letters)];

    // condição de bloqueio "umount do jogo"
    if (uniqueLetters.length <= 0) {
      return;
    }

    if (compareArrays(uniqueLetters, guessedLetters)) {
      startGame();
      setScore(score + 10);
      setHits(hits + 1);
    }
  }, [guessedLetters, letters, startGame]);

  // função que reiniciar o jogo
  const restartGame = () => {
    setGuesses(10);
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
      {gameStage === "end" && <GameOverScreen restart={restartGame} score={score} hits={hits} />}
    </div>
  );
}

export default App;
