const getUniqueArrayElements = (arr) => {
    const arrToReturn = [];
    arr.forEach(el => {
        if (!arrToReturn.includes(el)) {
            arrToReturn.push(el);
        }
    })
    return arrToReturn;
}

export const getCurrentGuessState = (typedLetters, word) => {
    const splittedWord = word.split('');
    return getUniqueArrayElements(typedLetters).reduce((acc, cv) => {
        if (!splittedWord.includes(cv)) {
            return {
                ...acc,
                wrongLetters: [
                    acc.wrongLetters,
                    cv
                ]
            }
        } else {
            return {
                ...acc,
                guessedLetters: [
                    acc.guessedLetters,
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