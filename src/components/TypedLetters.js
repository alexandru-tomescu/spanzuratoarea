import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles({
    root: {
        margin: '10px'
    }
});

export default function TypedLetters(props) {
    const { typedLetters } = props;
    const classes = useStyles({});

    return <div className={classes.root}>
        <h3>Typed letters: {typedLetters.length}</h3>
        {typedLetters}
    </div>
}