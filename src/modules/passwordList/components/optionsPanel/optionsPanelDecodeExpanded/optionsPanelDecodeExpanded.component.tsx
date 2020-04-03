import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './optionsPanelDecodeExpanded.styles';
import { ButtonWrapper, Content, ContentWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/localisation.context';
import { variantNames, VariantProps } from '../optionsPanel.component';
import { FormControl } from '@/common/components/formControl';
import { TextInput } from '@/common/components/textInput';
import { useRef, useState } from 'preact/hooks';
import { validateInputField } from '@/common/utils/form';

const formValidation = {
    shelfKey(val?: string) {
        return (val && val.length >= 6) || 'optionsPanel.shelfKeyTooShort';
    },
} as const;

export const OptionsPanelDecodeExpanded: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const formRef = useRef(undefined as any);
    const [shelfKeyValue, setShelfKeyValue] = useState('');
    const [shelfKeyErrors, setShelfKeyErrors] = useState('');

    const handleCancelClick = (): void =>
        switchCurrentVariantName(variantNames.decodeCollapsed);

    const handleConfirmClick = (): void => {
        // TODO: dispatchAction decode
        // TODO: useSelector to check if decoded successfully or not
        const successfulDecode = true;
        if (successfulDecode) {
            switchCurrentVariantName(variantNames.addNewCollapsed);
        } else {
            // TODO: Show error snackbar
        }
    };

    const renderInput = (): VNode => (
        <TextInput
            placeholder="e.g. MyStrongPassword1234"
            hasError={Boolean(shelfKeyErrors)}
            name="shelfKey"
            value={shelfKeyValue}
            onInput={validateInputField(
                'shelfKey',
                formRef,
                formValidation,
                setShelfKeyValue,
                setShelfKeyErrors
            )}
        />
    );

    const renderLabel = (): VNode => <Text>optionsPanel.enterShelfKey</Text>;
    const renderError = (): VNode => <Text>{shelfKeyErrors}</Text>;
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <form ref={formRef}>
                        <FormControl
                            hasError={Boolean(shelfKeyErrors)}
                            renderLabel={renderLabel}
                            renderInput={renderInput}
                            renderError={renderError}
                        />
                    </form>
                </Content>
            </ContentWrapper>
            <ButtonWrapper>
                <Button onClick={handleCancelClick}>
                    <Text>optionsPanel.cancel</Text>
                </Button>
                <Button
                    onClick={handleConfirmClick}
                    disabled={Boolean(shelfKeyErrors)}
                >
                    <Text>optionsPanel.confirm</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelDecodeExpanded.propTypes = forbidExtraProps({
    switchCurrentVariantName: PropTypes.func.isRequired,
});
