import { h } from 'preact';
import { useSelector, useAction } from '@/store';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './optionsPanel.styles';
import { OptionsPanelConnectCollapsed } from './optionsPanelConnectCollapsed';
import { OptionsPanelConnectExpanded } from './optionsPanelConnectExpanded';
import { OptionsPanelEntityFormCollapsed } from './optionsPanelEntityFormCollapsed';
import { OptionsPanelEntityFormExpanded } from './optionsPanelEntityFormExpanded';
import { selectCurrentOptionPanelVariantName } from '@/modules/passwordList/passwordList.selectors';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import { OptionsPanelVariantName } from '@/modules/passwordList/passwordList.constants';

type VariantSwitcher = (destination: OptionsPanelVariantName) => void;

export interface VariantProps {
    switchCurrentVariantName: VariantSwitcher;
}

type VariantInstances = {
    [key in OptionsPanelVariantName]: TypedComponent<VariantProps>;
};

export const OptionsPanel: TypedComponent<Props> = () => {
    const currentVariantName = useSelector(selectCurrentOptionPanelVariantName);
    const setCurrentVariantName = useAction(
        passwordListActions.switchOptionPanelVariant
    );

    const variants: VariantInstances = {
        connectCollapsed: OptionsPanelConnectCollapsed,
        connectExpanded: OptionsPanelConnectExpanded,
        entityFormCollapsed: OptionsPanelEntityFormCollapsed,
        entityFormExpanded: OptionsPanelEntityFormExpanded,
    };

    const CurrentVariant =
        variants[currentVariantName as OptionsPanelVariantName];
    return (
        <Wrapper currentVariantName={currentVariantName}>
            <CurrentVariant switchCurrentVariantName={setCurrentVariantName} />
        </Wrapper>
    );
};

interface Props {}

OptionsPanel.propTypes = {};
