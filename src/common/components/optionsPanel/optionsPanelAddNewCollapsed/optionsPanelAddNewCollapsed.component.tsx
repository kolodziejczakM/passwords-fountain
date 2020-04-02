import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './optionsPanelAddNewCollapsed.styles';
import {
    variantNames,
    VariantProps,
} from '@/common/components/optionsPanel/optionsPanel.component';
import { ButtonWrapper } from '@/common/components/optionsPanel/optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/localisation.context';
import { useLocation } from 'wouter-preact';

export const OptionsPanelAddNewCollapsed: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const [, setLocation] = useLocation();
    const handleSettingsClick = (): void => setLocation('/settings');
    const handleAddNewClick = (): void =>
        switchCurrentVariantName(variantNames.addNewExpanded);

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={handleSettingsClick}>
                    <Text>optionsPanel.settings</Text>
                </Button>
                <Button onClick={handleAddNewClick}>
                    <Text>optionsPanel.addNew</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelAddNewCollapsed.propTypes = forbidExtraProps({
    switchCurrentVariantName: PropTypes.func.isRequired,
});
