import React from "react";
import ButtonBase from "@material-ui/core/ButtonBase";
import LinkedInLogo from "../resources/images/LinkedIn_logo_initials.png"
import FacebookLogo from "../resources/images/facebook_logo.png"
import bckgnd from "../resources/images/xp_background.jpg"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(({
    image: {
        width: 100,
        height: 100,
    },
    background: {
        backgroundImage: bckgnd,
    },
    footer: {
        minWidth: '100%',
        minHeight: '100%',
    }
}));

export default function Contact({dark}) {
    const classes = useStyles();
    return (
        <div id={'contact'}
             className={"section" + (dark ? " section-dark" : "")}>
            <div className={'content'}>
                <h1> Contact </h1>
                <h3> Thanks for scrolling through! Why don't we connect?</h3>
                <ButtonBase href={'https://www.linkedin.com/in/newmanhu'}
                            target={'blank'}
                >
                    <img className={classes.image}
                         src={LinkedInLogo}
                         alt={'LinkedIn'}/>
                </ButtonBase>
                <ButtonBase href={'https://www.facebook.com/newman.hu.1'}
                            target={'blank'}
                >
                    <img className={classes.image}
                         src={FacebookLogo}
                         alt={'Facebook'}
                    />
                </ButtonBase>
                <img src={bckgnd}
                     alt={'background'}
                     className={classes.footer}
                />
            </div>
        </div>
    );
}