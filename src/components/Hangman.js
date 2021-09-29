import { makeStyles } from "@material-ui/styles";

const color = 'red';
const howThick = '5px'
const useStyles = makeStyles({
    root: {
        margin: '10px',
    },
    circle: {
        width: '30px',
        height: '30px',
        border: `${howThick} solid ${color}`,
        borderRadius: '50%',
        margin: '0 auto',
    },
    body: {
        width: howThick,
        backgroundColor: color,
        height: '120px',
        margin: '0 auto',
    },
    leftArm: {
        width: '5px',
        backgroundColor: color,
        height: '40px',
        transform: 'skewY(-11deg)'
    }
});

export default function Hangman(props) {
    const { numberWrongLetters } = props;
    const classes = useStyles({});

    const head = () => {
        return <div className={classes.circle}></div>
    }

    const body = () => {
        return <div className={classes.body}></div>
    }

    const leftArm = () => {
        return <div className={classes.leftArm}></div>
    }

    const rightArm = () => {
        return <div className={classes.rightArm}></div>
    }

    const leftFoot = () => {
        return <div className={classes.leftFoot}></div>
    }

    const rightFoot = () => {
        return <div className={classes.rightFoot}></div>
    }

    const bodyElements = [head, body, leftArm, rightArm, leftFoot, rightFoot]
    const bodyElementsToRender = bodyElements.slice(0, numberWrongLetters);
    return <div className={classes.root}>
        {bodyElementsToRender.map(bE => bE())}
        {bodyElements.map(bE => bE())}
    </div>
}