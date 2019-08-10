import React from "react";
import ProjectLinkItem from "./ProjectLinkItem";
import CatanDiceThumb from "../resources/images/Epic Catan dice thumb.PNG"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import VideoItem from "./ProjectVideoItem";

const useStyles = makeStyles(({
    root: {
        flexGrow: 1,
    },
    image: {
        width: 320,
        height: 180,
    },
    text: {
        align: 'left',
    },
}));

export default function Resume({dark}) {
    const classes = useStyles();

    // noinspection RequiredAttributes,HtmlDeprecatedAttribute
    return (
        <div id={"projects"}
             className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content">
                <h1>Side Projects</h1>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <VideoItem
                            videoURL={'https://youtu.be/zqXvdnZSFrI'}
                            company={'Virtual Reality @ Berkeley'}
                            position={'VR Decal Final Project'}
                            content={'I took the VR Decal which is a student lead course that teaches VR game development with Unity and Oculus Rift. ' +
                            'For the final project my four-person group developed a creative sandbox game that allowed users ' +
                            'to interact with their environment using “the Force” from Star Wars. Players have a great feel for the weight ' +
                            'of virtual objects and our controls provide a very intuitive representation of what it would feel like as a Jedi. ' +
                            'You can throw a wide assortment of objects at a large broken wall, play with an extremely heavy Jenga tower, or even ' +
                            'pull down the moon if you have enough strength! Our project was very well received and nearly everyone loved the awesome feel of power from using the force. \n' +
                            '\n (This project is currently in further development by a third party so there is no' +
                            ' public repo, but feel free to contact me for details! Also check out the demonstration video)\n'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ProjectLinkItem
                            logo={CatanDiceThumb}
                            link={'https://huw-man.github.io/Epic-Catan-Dice/'}
                            name={'Online 3D dice for Catan'}
                            content={'I used to play a LOT of Catan. Nearly every night over the summer my friends' +
                            ' and I would gather for an exciting match that usually ran late into the night. We had' +
                            ' issues with our dice, so I wrote this dice roller to do the dirty work of generating' +
                            ' random numbers. It takes random numbers from RANDOM.org which generates truly random' +
                            ' numbers from atmospheric noise. This is actually my second version and the first' +
                            ' version was a 2D dice roller with a helpful graph to track the numbers that were' +
                            ' rolled.'}
                            link2={<p> You can check out the first version
                                <a href="https://github.com/Huw-man/Catan-Dice-Stat-Tracker">here</a>
                            </p>}
                        />

                    </Grid>
                </Grid>
            </div>
        </div>
    );
}