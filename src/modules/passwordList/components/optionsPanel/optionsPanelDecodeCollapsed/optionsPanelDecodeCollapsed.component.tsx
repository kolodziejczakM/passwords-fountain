import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelDecodeCollapsed.styles';
import { ButtonWrapper } from '../optionsPanel.styles';
import { variantNames, VariantProps } from '../optionsPanel.component';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { useLocation } from 'wouter-preact';

export const OptionsPanelDecodeCollapsed: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const [, setLocation] = useLocation();
    const handleSettingsClick = (): void => setLocation('/settings');
    const handleDecodeClick = (): void =>
        switchCurrentVariantName(variantNames.decodeExpanded);

    return (
        <Wrapper>
            <ButtonWrapper>
                <Button onClick={handleSettingsClick}>
                    <Text>optionsPanel.settings</Text>
                </Button>
                <Button onClick={handleDecodeClick}>
                    <Text>optionsPanel.decode</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelDecodeCollapsed.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
