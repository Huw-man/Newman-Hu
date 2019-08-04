import React from "react";
import {ButtonBase, Grid, Paper, Typography} from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

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

export default function ResumeItem({logo, company, position, location, content}) {
    const classes = useStyles();
    // noinspection RequiredAttributes,HtmlDeprecatedAttribute
    return (
        <Paper elevation={3} className={classes.root}>
            <Grid container
                  alignItems={'center'}
                  spacing={4}>
                <Grid item xs={5}>
                    <ButtonBase>
                        <img className={classes.image}
                             src={logo}
                             alt={'logo'}/>
                    </ButtonBase>
                </Grid>
                <Grid item xs={7}>
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
            </Grid>
        </Paper>
    );

}