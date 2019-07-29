import React from "react";
import ResumeItem from "./ResumeItem";
import sickLogo from "../resources/SICK-Logo_001.png"
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles(theme => ({
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

export default function Resume() {
    const classes = useStyles();

    // noinspection RequiredAttributes,HtmlDeprecatedAttribute
    return (
        <div id={"resume"} className="section-content">
            <h1>Stuff I've Done</h1>
            <ResumeItem
                logo={sickLogo}
                company={'SICK Sensor Intelligence'}
                position={'Software Engineering Intern'}
                location={'Stoughton, MA'}
                content={'I am creating an augmented reality data visualization tool for damage and tamper detection ' +
                'in the warehouse and factory environment. My project is built on the android platform and leverages ' +
                'ARCore for augmented reality features.'}
            />
        </div>
    );
}