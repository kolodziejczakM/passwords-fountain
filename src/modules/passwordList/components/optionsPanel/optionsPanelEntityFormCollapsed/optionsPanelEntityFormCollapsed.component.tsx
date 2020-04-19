import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelEntityFormCollapsed.styles';
import { variantNames, VariantProps } from '../optionsPanel.component';
import { ButtonWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { useLocation } from 'wouter-preact';

export const OptionsPanelEntityFormCollapsed: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const [, setLocation] = useLocation();
    const handleSettingsClick = (): void => setLocation('/settings');
    const handleAddNewClick = (): void =>
        switchCurrentVariantName(variantNames.entityFormExpanded);

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

OptionsPanelEntityFormCollapsed.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
