import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper, ContentWrapper } from './optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/localisation.context';
import { useLocation } from 'wouter-preact';

// TODO: continue here
export const OptionsPanel: TypedComponent<Props> = () => {
    const [location, setLocation] = useLocation();
    const handleSettingsClick = (): void => {
        setLocation('/settings');
    };

    const handleAddNewClick = (): void => {
        setLocation('/todo');
    };

    return (
        <Wrapper>
            <ContentWrapper>{}</ContentWrapper>
            <Button onClick={handleSettingsClick}>
                <Text>optionsPanel.settings</Text>
            </Button>
            <Button onClick={handleAddNewClick}>
                <Text>optionsPanel.addNew</Text>
            </Button>
        </Wrapper>
    );
};

interface Props {
    renderContent: () => VNode;
}

OptionsPanel.propTypes = forbidExtraProps({
    renderContent: PropTypes.func.isRequired,
});
