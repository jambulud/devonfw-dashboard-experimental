import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepProps from './steps/stepsProps.model';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop: '4rem'
    },
    backButton: {
      marginRight: theme.spacing(1),
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }),
);

function getSteps() {
  return ['Setup', 'Open project'];
}


export interface StepObject {
  title: string;
  content: string;
  stepJSX: JSX.Element | null;
}

interface StepperProps {
  steps: StepObject[];
}

export default function MaterialStepper(props: StepperProps) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const lastStep = (
    <div>
      <Typography className={classes.instructions}>All steps completed</Typography>
      <Button onClick={handleReset}>Reset</Button>
    </div>
  )

  const getStep = (step: StepObject) => (
    <Step key={step.title}>
      <StepLabel>{step.title}</StepLabel>
    </Step>
  )


  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {props.steps.map((step: StepObject) => getStep(step))}
      </Stepper>
      <div>
        {props.steps[activeStep] && props.steps[activeStep].stepJSX}
        {activeStep === props.steps.length ? lastStep : (
          <div>
            <Typography className={classes.instructions}>{props.steps[activeStep].content}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === props.steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}