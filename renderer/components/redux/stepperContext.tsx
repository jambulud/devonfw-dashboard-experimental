import * as React from 'react';
import { StepperActionType, StepperAction } from './stepperActions';

interface StepperState {
  activeStep: number;
}

const initialState: StepperState = {
  activeStep: 0,
};

const reducer = (state: StepperState = initialState, action: StepperAction) => {
  switch (action.type) {
    case 'SET_ACTIVE': {
      return { ...state };
    }

    case 'NEXT_STEP': {
      return { ...state };
    }

    case 'PREVIOUS_STEP': {
      return { ...state };
    }
    default:
      throw new Error();
  }
};

export const StepperContext = React.createContext<{
  state: StepperState;
  dispatch: (action: StepperAction) => void;
}>({
  state: initialState,
  dispatch: () => {},
});
export const StepperConsumer = StepperContext.Consumer;

export function StepperProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  console.log(value);
  return (
    <StepperContext.Provider value={value}>
      {props.children}
    </StepperContext.Provider>
  );
}
