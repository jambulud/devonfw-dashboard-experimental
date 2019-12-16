import { Component, MouseEvent } from 'react';
import MaterialStepper, { StepObject } from './MaterialStepper';
import TypeStep from './first/TypeStep';
import DataStep from './second/DataStep';
import { StepperContext, IStepperContext } from '../redux/stepperContext';

class CustomStepper extends Component {
  //inheritContext: IStepperContext = this.context;

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
    console.log(this.context.state)
    activeStep = activeStep ? activeStep : 0;
    console.log(activeStep)

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
