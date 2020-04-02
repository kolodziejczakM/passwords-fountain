import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './optionsPanelDecodeCollapsed.styles';
import {
    ButtonWrapper,
    ContentWrapper,
} from '@/common/components/optionsPanel/optionsPanel.styles';
import {
    variantNames,
    VariantProps,
} from '@/common/components/optionsPanel/optionsPanel.component';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/localisation.context';
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

OptionsPanelDecodeCollapsed.propTypes = forbidExtraProps({
    switchCurrentVariantName: PropTypes.func.isRequired,
});
