export type StepperActionType = 'SET_ACTIVE' | 'NEXT_STEP' | 'PREVIOUS_STEP';

export interface StepperAction {
  type: StepperActionType;
  payload: {};
}
