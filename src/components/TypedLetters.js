import React from 'react';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        margin: '20px',
        textAlign: 'center'
    },
    good: {
        color: 'green',
        padding: '3px',
    },
    bad: {
        color: 'red',
        padding: '3px',
    }
});

const TypedLetters = React.memo((props) => {
    const { typedLetters, guessedLetters } = props;
    const classes = useStyles({});

    return <div className={classes.root}>
        <h4>Typed letters:</h4>
        <h1>
            {typedLetters.map((l, i) => {
                const theClass = guessedLetters.includes(l) ? classes.good : classes.bad;
                return <span key={i} className={theClass}>{l}</span>
            })}
        </h1>
    </div>
})

export default TypedLetters 