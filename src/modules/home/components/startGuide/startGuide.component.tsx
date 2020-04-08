import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper, GuideStep } from './startGuide.styles';
import { Text } from '@/modules/localisation/components/text';

interface Step {
    id: number;
    textLabel: string;
    withMarkup?: boolean;
}

const steps: Step[] = [
    { id: 0, textLabel: 'startGuide.step1' },
    { id: 1, textLabel: 'startGuide.step2' },
    { id: 2, textLabel: 'startGuide.step3' },
    { id: 3, textLabel: 'startGuide.step4' },
    { id: 4, textLabel: 'startGuide.step5' },
];

export const StartGuide: TypedComponent<Props> = () => {
    const renderSteps = (): VNode[] =>
        steps.map(
            ({ id, textLabel, withMarkup = true }): VNode => (
                <GuideStep key={id}>
                    <Text withMarkup={withMarkup}>{textLabel}</Text>
                </GuideStep>
            )
        );

    return <Wrapper>{renderSteps()}</Wrapper>;
};

interface Props {}

StartGuide.propTypes = {};
