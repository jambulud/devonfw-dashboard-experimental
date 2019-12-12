import * as React from "react";

interface IStepper {
  activeStep: number;
}

type Action = { type: "SET_ACTIVE" | "NEXT_STEP" | "PREVIOUS_STEP"};

const initialState: IStepper = {
  activeStep: 0,
};

const reducer = (state: IStepper = initialState, action: Action) => {
  switch (action.type) {
    case "SET_ACTIVE": {
      return { ...state };
    }

    case "NEXT_STEP": {
      return { ...state };
    }

    case "PREVIOUS_STEP": {
      return { ...state };
    }
    default:
      throw new Error();
  }
};

export const StepperContext = React.createContext<{
  state: typeof initialState;
  dispatch: (action: Action) => void;
}>({
  state: initialState,
  dispatch: () => {}
});
export const StepperConsumer = StepperContext.Consumer;

export function StepperProvider(props: any) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const value = { state, dispatch };
  console.log(value);
  return (
    <StepperContext.Provider value={value}>{props.children}</StepperContext.Provider>
  );
}
