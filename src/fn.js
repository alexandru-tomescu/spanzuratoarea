export const getCurrentGuessState = (typedLetters, word) => {
    const splittedWord = word.split('');
    return typedLetters.reduce((acc, cv) => {
        if (!splittedWord.includes(cv)) {
            return {
                ...acc,
                wrongLetters: [
                    ...acc.wrongLetters,
                    cv
                ]
            }
        } else {
            return {
                ...acc,
                guessedLetters: [
                    ...acc.guessedLetters,
                    cv
                ]
            }
        }
    }, {
        guessedLetters: [],
        wrongLetters: []
    })
}

export const getRandomWord = () => {
    const words = ['Miau'];
    return words[0].toUpperCase();
}

export const getInitialState = () => {
    return {
      typedLetters: [],
      word: getRandomWord(),
      gameFinished: false
    }
  }