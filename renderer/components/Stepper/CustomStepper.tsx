import { Component, MouseEvent } from 'react';
import MaterialStepper, { StepObject } from './MaterialStepper';
import TypeStep from './first/TypeStep';
import DataStep from './second/DataStep';
import { StepperContext, IStepperContext } from '../redux/stepperContext';

class CustomStepper extends Component {

  steps: StepObject[] = [
    {
      title: 'Project type',
      content: 'Project type',
      stepJSX: <TypeStep></TypeStep>,
    },
    {
      title: 'Projects data',
      content: 'Project data',
      stepJSX: <DataStep></DataStep>,
    },
  ];

  render() {
    let activeStep = this.context.state.activeStep;
    activeStep = activeStep ? activeStep : 0;

    return (
      <>
        <MaterialStepper steps={this.steps} />
        {this.steps[activeStep].stepJSX}
      </>
    );
  }
}

CustomStepper.contextType = StepperContext;

export default CustomStepper;
