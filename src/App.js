import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import Hangman from './components/Hangman';
import Word from './components/Word';
import TypedLetters from './components/TypedLetters';
import { getInitialState, getCurrentGuessState } from './fn'

const useStyles = makeStyles({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  }
});

export default function App() {
  const [state, setState] = useState(getInitialState());
  const { typedLetters, word, gameFinished } = state;

  const classes = useStyles({});

  useEffect(() => {
    const cb = (e) => {
      const theLetter = e.key.toUpperCase()
      if (!gameFinished && !/[^a-zA-Z]/.test(theLetter) && !typedLetters.includes(theLetter)) {
        setState({
          ...state,
          typedLetters: [...typedLetters, theLetter]
        })
      }
    };
    window.addEventListener('keypress', cb);
    return () => {
      window.removeEventListener('keypress', cb);
    }
  });

  const guessState = getCurrentGuessState(typedLetters, word);
  const { wrongLetters, guessedLetters } = guessState;

  const onGameFinished = () => {
    setState({
      ...state,
      gameFinished: true
    })
  }

  return <div className={classes.root}>
    <TypedLetters typedLetters={typedLetters} wrongLetters={wrongLetters} guessedLetters={guessedLetters} />
    <Hangman numberWrongLetters={wrongLetters.length} onGameFinished={onGameFinished} />
    <Word word={word} guessedLetters={guessedLetters} />
  </div>;
}