import React from "react";
import ResumeItem from "./ResumeItem";
import sickLogo from "../resources/SICK_logo_resized.png"
import slacLogo from "../resources/SLAC_Logo.png"
import saitLogo from "../resources/sait_resized.png"
import VRBLogo from "../resources/vr_berkeley.png"
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";

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
        <div id={"resume"}
             className={"section" + (dark ? " section-dark" : "")}>
            <div className="section-content">
                <h1>Stuff I've Done</h1>
                <Grid container spacing={5}>
                    <Grid item xs={12}>
                        <ResumeItem
                            logo={sickLogo}
                            company={'SICK Sensor Intelligence'}
                            position={'Software Engineering Intern'}
                            location={'Stoughton, MA'}
                            content={'I am creating an augmented reality data visualization tool for damage and tamper detection ' +
                            'in the warehouse and factory environment. My project is built on the android platform and leverages ' +
                            'ARCore for augmented reality features.'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ResumeItem
                            logo={slacLogo}
                            company={'Stanford Linear Accelerator Center'}
                            position={'Research Intern'}
                            location={'Menlo Park, CA'}
                            content={'2018: I investigated sideband detection methods for Self-amplified spontaneous emission free-electron laser (SASE FEL), developed software model for thin crystal spectrometer, and furthered development of AI assisted diagnosis of Alzheimer’s.\n' +
                            '2016: I produced research about the automated early stage diagnosis of Alzheimer’s with machine learning and image processing. I also worked with neurologists and physicians from the Alzheimer’s Association.\n' +
                            '2015: I conducted research on artificial intelligence optimization for an X-Ray free electron laser and gained experience developing neural nets built with the PyBrain AI library. Co-authored paper published in Nuclear Instruments & Methods.'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ResumeItem
                            logo={saitLogo}
                            company={'Student Affairs IT'}
                            position={'Desktop Consultant'}
                            location={'Berkeley, CA'}
                            content={'I provided technical support to all student affairs staff on the UC Berkeley' +
                            ' campus. My team supported the desktops, laptops, printers, and iPads used by' +
                            ' departments such as the Financial Aid and Scholarship Office, Career Center, Administration, Communications, and many more.'}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <ResumeItem
                            logo={VRBLogo}
                            company={'Virtual Reality @ Berkeley'}
                            position={'Sculpt-ML backend developer'}
                            location={'Berkeley, CA'}
                            content={'Sculpt-ML is a project aimed at developing an augmented reality mobile app to ' +
                            'create machine learning models quickly and interactively. It is poised as an educational ' +
                            'tool for teaching computer science. I led back-end development for the necessary infrastructure ' +
                            'to create sound machine learning models using Keras and Tensorflow.'}
                        />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}