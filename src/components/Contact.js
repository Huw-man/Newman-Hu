import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import LinkedInLogo from "../resources/LinkedIn_logo_initials.png"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(({
    image: {
        width: 100,
        height: 100,
    }
}));

export default function Contact({dark}) {
    const classes = useStyles();
    return (
        <div id={'contact'}
             className={"section" + (dark ? " section-dark" : "")}>
            <div className={'section-content'}>
                <h1> Contact </h1>
                <h3> Thanks for scrolling through! Why don't we connect on LinkedIn?</h3>
                <ButtonBase href={'https://www.linkedin.com/in/newmanhu'}
                            target={'blank'}>
                    <img className={classes.image}
                         src={LinkedInLogo}
                         alt={'LinkedIn'}/>
                </ButtonBase>
            </div>
        </div>
    );
}