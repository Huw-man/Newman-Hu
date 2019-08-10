import React from "react";
import {Grid, Paper, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import ReactPlayer from "react-player";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        padding: '20px',
    },
    image: {
        width: 320,
        height: 180,
    },
    text: {
        align: 'left',
    },
}));

export default function ResumeItem({videoURL, company, position, location, content}) {
    const classes = useStyles();
    // noinspection RequiredAttributes,HtmlDeprecatedAttribute
    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container
                  alignItems={'center'}
                  direction={'column'}
                  spacing={4}>
                <Grid item xs={12}>
                    <Typography variant={'h5'}
                                align={'left'}
                                color={"textPrimary"}>
                        {company}
                    </Typography>
                    <Typography variant={'h6'}
                                align={'left'}>
                        {position}
                    </Typography>
                    <Typography variant={'h6'}
                                align={'left'}>
                        {location}
                    </Typography>
                    <Typography variant={'body1'}
                                align={'left'}>
                        {content}
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <ReactPlayer
                        url={videoURL}
                        controls={true}
                        light={true}
                    />
                </Grid>
            </Grid>
        </Paper>
    );

}