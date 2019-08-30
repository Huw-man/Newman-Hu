import React from "react";
import image from "../resources/images/main_image.JPG";
import makeStyles from "@material-ui/core/styles/makeStyles";
import {TouchRippleProps as center} from "@material-ui/core/ButtonBase/TouchRipple";

const useStyles = makeStyles(({
    root: {
        flexGrow: 1,
        alignItems: center
    },
    image: {
        minWidth: '100%',
        minHeight: '100%',
    },
}));

export default function Home({dark}) {
    const classes = useStyles();

    return (
        <div id={"home"}
             className={classes.root}
        >
            <img src={image}
                 alt={"portrait"}
                 className={classes.image}
            />
        </div>
    );
}
