import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanel.styles';
import { useState } from 'preact/hooks';
import { OptionsPanelDecodeCollapsed } from './optionsPanelDecodeCollapsed';
import { OptionsPanelDecodeExpanded } from './optionsPanelDecodeExpanded';
import { OptionsPanelEntityFormCollapsed } from './optionsPanelEntityFormCollapsed';
import { OptionsPanelEntityFormExpanded } from './optionsPanelEntityFormExpanded';

export enum variantNames {
    decodeCollapsed = 'decodeCollapsed',
    decodeExpanded = 'decodeExpanded',
    entityFormCollapsed = 'entityFormCollapsed',
    entityFormExpanded = 'entityFormExpanded',
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
        entityFormCollapsed: OptionsPanelEntityFormCollapsed,
        entityFormExpanded: OptionsPanelEntityFormExpanded,
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

OptionsPanel.propTypes = {
    defaultVariantName: PropTypes.any,
};

OptionsPanel.defaultProps = {
    defaultVariantName: variantNames.decodeCollapsed,
};
