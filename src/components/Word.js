import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        margin: '0px',
        textAlign: 'center'
    },
    var: {
        padding: '0px 10px',
        fontSize: '50px',
        ['& sup']: {
            fontSize: '20px'
        }
    }
});

const Word = React.memo((props) => {
    const { word, guessedLetters } = props;
    const classes = useStyles({});

    return <div className={classes.root}>
        <p>The Word</p>
        {word.split('').map((l, i) => {
            const guessed = guessedLetters.includes(l);
            return <var key={i} className={classes.var}>{guessed ? l : ""}<sup>{i + 1}</sup></var>
        })}
    </div>
})

export default Word