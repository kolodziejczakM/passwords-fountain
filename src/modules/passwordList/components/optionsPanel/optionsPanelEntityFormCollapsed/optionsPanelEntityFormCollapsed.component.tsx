import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelEntityFormCollapsed.styles';
import { VariantProps } from '../optionsPanel.component';
import { variantNames } from '@/modules/passwordList/passwordList.contants';
import { ButtonWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { route } from 'preact-router';

export const OptionsPanelEntityFormCollapsed: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const handleSettingsClick = (): void => {
        route('/settings');
    };
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
