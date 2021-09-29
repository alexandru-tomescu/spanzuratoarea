import React from 'react';
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
    },
    rightArm: {
    },
    leftFoot: {
    },
    rightFoot: {
    }
});

const Hangman = React.memo((props) => {
    const { numberWrongLetters, onGameFinished } = props;
    const classes = useStyles({});

    const head = () => {
        return <div className={classes.circle}></div>
    }

    const body = () => {
        return <div className={classes.body}></div>
    }

    const leftArm = () => {
        return <div className={classes.leftArm}>LEFT ARM</div>
    }

    const rightArm = () => {
        return <div className={classes.rightArm}>RIGHT ARM</div>
    }

    const leftFoot = () => {
        return <div className={classes.leftFoot}>LEFT FOOT</div>
    }

    const rightFoot = () => {
        return <div className={classes.rightFoot}>RIGHT FOOT</div>
    }

    const bodyElements = [head, body, leftArm, rightArm, leftFoot, rightFoot]
    const bodyElementsToRender = bodyElements.slice(0, numberWrongLetters);

    if (numberWrongLetters === bodyElements.length) {
        onGameFinished();
    }

    return <div className={classes.root}>
        {bodyElementsToRender.map((bE, i) => <span key={i}>{bE()}</span>)}
    </div>
})

export default Hangman