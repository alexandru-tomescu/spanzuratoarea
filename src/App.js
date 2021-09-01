import { useEffect, useState } from 'react';
import { makeStyles } from "@material-ui/styles";
import Hangman from './components/Hangman';
import Word from './components/Word';
import TypedLetters from './components/TypedLetters';
import { getRandomWord, getCurrentGuessState } from './fn'

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
  const [state, setState] = useState({
    typedLetters: [],
    word: getRandomWord()
  });
  const { typedLetters, word } = state;

  const classes = useStyles({});

  useEffect(() => {
    const cb = (e) => {
      setState({
        ...state,
        typedLetters: [...typedLetters, e.key]
      })
    };
    window.addEventListener('keypress', cb);
    return () => {
      window.removeEventListener('keypress', cb);
    }
  });

  const guessState = getCurrentGuessState(typedLetters, word);
  const { wrongLetters, guessedLetters } = guessState;

  return <div className={classes.root}>
    <TypedLetters typedLetters={typedLetters} />
    <Hangman numberWrongLetters={wrongLetters.length} />
    <Word word={word} guessedLetters={guessedLetters} />
  </div>;
}