import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './optionsPanel.styles';
import { useState } from 'preact/hooks';
import { OptionsPanelDecodeCollapsed } from './optionsPanelDecodeCollapsed';
import { OptionsPanelDecodeExpanded } from './optionsPanelDecodeExpanded';
import { OptionsPanelAddNewCollapsed } from './optionsPanelAddNewCollapsed';
import { OptionsPanelAddNewExpanded } from './optionsPanelAddNewExpanded';

export enum variantNames {
    decodeCollapsed = 'decodeCollapsed',
    decodeExpanded = 'decodeExpanded',
    addNewCollapsed = 'addNewCollapsed',
    addNewExpanded = 'addNewExpanded',
}

type VariantName = keyof typeof variantNames;
type VariantSwitcher = (destination: VariantName) => void;

export interface VariantProps {
    switchCurrentVariantName: VariantSwitcher;
}

type VariantInstances = {
    [key in VariantName]: TypedComponent<VariantProps>;
};

export const OptionsPanel: TypedComponent<Props> = ({
    defaultVariantName,
}: Props) => {
    const [currentVariantName, setCurrentVariantName] = useState(
        defaultVariantName
    );
    const variants: VariantInstances = {
        decodeCollapsed: OptionsPanelDecodeCollapsed,
        decodeExpanded: OptionsPanelDecodeExpanded,
        addNewCollapsed: OptionsPanelAddNewCollapsed,
        addNewExpanded: OptionsPanelAddNewExpanded,
    };

    const CurrentVariant = variants[currentVariantName as VariantName];
    return (
        <Wrapper>
            <CurrentVariant switchCurrentVariantName={setCurrentVariantName} />
        </Wrapper>
    );
};

interface Props {
    defaultVariantName?: VariantName;
}

OptionsPanel.propTypes = forbidExtraProps({
    defaultVariantName: PropTypes.any,
});

OptionsPanel.defaultProps = {
    defaultVariantName: variantNames.decodeCollapsed,
};
