import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { route } from 'preact-router';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelConnectCollapsed.styles';
import { ButtonWrapper } from '../optionsPanel.styles';
import { VariantProps } from '../optionsPanel.component';
import { variantNames } from '@/modules/passwordList/passwordList.contants';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';

export const OptionsPanelConnectCollapsed: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const handleSettingsClick = (): void => {
        route('/settings');
    };
    const handleDecodeClick = (): void =>
        switchCurrentVariantName(variantNames.connectExpanded);

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={handleSettingsClick}>
                    <Text>optionsPanel.settings</Text>
                </Button>
                <Button onClick={handleDecodeClick}>
                    <Text>optionsPanel.connect</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelConnectCollapsed.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
