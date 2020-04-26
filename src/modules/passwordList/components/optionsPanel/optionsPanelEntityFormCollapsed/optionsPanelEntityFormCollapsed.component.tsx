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
        switchCurrentVariantName(variantNames.entityFormExpanded);

    return (
        <Wrapper>
            <ButtonWrapper>
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
