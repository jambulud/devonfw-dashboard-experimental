import StackCard from '../../cards/stackCard';
import StepProps from './stepsProps.model';

const projectTypeStep = (props: StepProps) => {
    const step = (
        <StackCard
            image="/assets/stacks/angular.png"
            command="devon ng new"
            onClick={props.onClick}
        ></StackCard>
    );
    return step;
}

export default projectTypeStep;