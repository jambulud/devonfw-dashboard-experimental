import { Component } from 'react';
import { StepperContext } from '../../redux/stepperContext';
import NgData from './angular/NgData';

class DataStep extends Component {

  getStep = (stack: string) => {
    if (stack == 'ng') {
      return <NgData></NgData>;
    }

    return null;
  };
  render() {
    let stack = this.context.state.stack;
    stack = stack ? stack : '';

    return <>{this.getStep(stack)}</>;
  }
}

DataStep.contextType = StepperContext;

export default DataStep;
