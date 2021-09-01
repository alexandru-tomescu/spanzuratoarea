import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        margin: '10px'
    }
});

export default function Hangman(props) {
    const { numberWrongLetters } = props;
    const classes = useStyles({});

    return <div className={classes.root}>
        <h3>Number Wrong letters: {numberWrongLetters}</h3>
    </div>
}