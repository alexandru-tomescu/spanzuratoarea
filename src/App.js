import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import Hangman from './components/Hangman';
import Word from './components/Word';
import TypedLetters from './components/TypedLetters';
import { getInitialState, getGuessState } from './fn'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  border: {
    border: '2px solid green',
    padding: '20px',
    textAlign: 'center'
  }
});

export default function App() {
  const [state, setState] = useState(getInitialState());
  const { typedLetters, word, gameFinished, victory } = state;

  const classes = useStyles({});

  const guessState = getGuessState(typedLetters, word);
  const { wrongLetters, guessedLetters } = guessState;

  useEffect(() => {
    const cb = (e) => {
      const theLetter = e.key.toUpperCase()
      if (!gameFinished && !/[^a-zA-Z]/.test(theLetter) && !typedLetters.includes(theLetter)) {
        const newTypedLetters = [...typedLetters, theLetter]
        const nextGuessState = getGuessState(newTypedLetters, word);

        const victory = word.split('').every(l => nextGuessState.guessedLetters.includes(l));
        setState({
          ...state,
          typedLetters: newTypedLetters,
          gameFinished: victory,
          victory
        })
      }
    };
    window.addEventListener('keypress', cb);
    return () => {
      window.removeEventListener('keypress', cb);
    }
  });

  const onGameFinished = () => {
    setState({
      ...state,
      gameFinished: true
    })
  }

  const startNewGame = () => {
    setState(getInitialState());
  }

  const gameFinishedJSX = () => {
    return <div className={classes.border}>
      <h3>Game finished</h3>
      <h1>{victory ? "YOU WON" : "YOU FAILED"}</h1>
      <button onClick={startNewGame}>Start Again</button>
    </div>;
  }

  return <div className={classes.root}>
    <h2>Hangman Game</h2>
    <TypedLetters typedLetters={typedLetters} guessedLetters={guessedLetters} />
    <Hangman numberWrongLetters={wrongLetters.length} onGameFinished={onGameFinished} />
    {gameFinished && gameFinishedJSX()}
    <Word word={word} guessedLetters={guessedLetters} />
  </div>;
}