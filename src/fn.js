const words = ['maria', 'paine', 'salam', 'covor', 'girafa'];

export const getGuessState = (typedLetters, word) => {
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
    const numberOfWords = words.length;
    const indexChoosen = Math.floor(Math.random() * numberOfWords);
    return words[indexChoosen].toUpperCase();
}

export const getInitialState = () => {
    return {
        typedLetters: [],
        word: getRandomWord(),
        gameFinished: false,
        victory: false
    }
}