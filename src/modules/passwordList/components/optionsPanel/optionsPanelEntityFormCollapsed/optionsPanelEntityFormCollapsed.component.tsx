import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelEntityFormCollapsed.styles';
import { VariantProps } from '../optionsPanel.component';
import { optionsPanelVariantNames } from '@/modules/passwordList/passwordList.constants';
import { ButtonWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { route } from 'preact-router';
import { useSelector } from '@preact-hooks/unistore';
import { selectIsInEditMode } from '@/modules/passwordList/passwordList.selectors';

export const OptionsPanelEntityFormCollapsed: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const isInEditMode = useSelector(selectIsInEditMode);
    const actionLabel = isInEditMode
        ? 'optionsPanel.edit'
        : 'optionsPanel.addNew';

    const handleSettingsClick = (): void => {
        route('/settings');
    };
    const handleActionClick = (): void =>
        switchCurrentVariantName(optionsPanelVariantNames.entityFormExpanded);

    return (
        <Wrapper>
            <ButtonWrapper isInEditMode={isInEditMode}>
                <Button onClick={handleSettingsClick}>
                    <Text>optionsPanel.settings</Text>
                </Button>
                <Button onClick={handleActionClick}>
                    <Text>{actionLabel}</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelEntityFormCollapsed.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
