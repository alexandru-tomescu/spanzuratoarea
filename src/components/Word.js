import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        margin: '10px'
    }
});

export default function Word(props) {
    const { word, guessedLetters } = props;
    const classes = useStyles({});

    return <div className={classes.root}>
        <h3>The Word: {word}</h3>
        <h3>Guessed: {guessedLetters.join("")}</h3>	
    </div>
}