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
import { VariantName } from '@/modules/passwordList/passwordList.contants';

type VariantSwitcher = (destination: VariantName) => void;

export interface VariantProps {
    switchCurrentVariantName: VariantSwitcher;
}

type VariantInstances = {
    [key in VariantName]: TypedComponent<VariantProps>;
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

    const CurrentVariant = variants[currentVariantName as VariantName];
    return (
        <Wrapper currentVariantName={currentVariantName}>
            <CurrentVariant switchCurrentVariantName={setCurrentVariantName} />
        </Wrapper>
    );
};

interface Props {}

OptionsPanel.propTypes = {};
