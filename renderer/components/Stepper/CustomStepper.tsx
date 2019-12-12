import { Component, MouseEvent } from 'react';
import MaterialStepper, { StepObject } from './MaterialStepper';
import DataStep from './steps/projectDataStep';
import TypeStep from './steps/projectTypeStep';

interface CustomStepperState {
  messages: string[];
}

class CustomStepper extends Component {
  state = {
    stack: '',
    stackData: { name: '', routing: true }
  };

  handleAngular = (event: MouseEvent) => {
    console.log('clicked angular');
    this.setState({ stack: 'angular' });
  };

  handleData = (event: MouseEvent) => {
    console.log('clicked angular');
    this.setState({ stackData: { name: 'my-new-project'} });
  };

  steps: StepObject[] = [
    {
      title: 'Project type',
      content: 'Project type',
      stepJSX: <TypeStep onClick={this.handleAngular}></TypeStep>,
    },
    {
      title: 'Projects data',
      content: 'Project data',
      stepJSX: <DataStep onClick={this.handleData}></DataStep>,
    },
  ];

  render() {
    return <MaterialStepper steps={this.steps} />;
  }
}

export default CustomStepper;
