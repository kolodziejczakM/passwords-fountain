import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelConnectExpanded.styles';
import { ButtonWrapper, Content, ContentWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { VariantProps } from '../optionsPanel.component';
import { variantNames } from '@/modules/passwordList/passwordList.contants';
import { FormControl } from '@/common/components/formControl';
import { TextInput } from '@/common/components/textInput';
import { useRef, useState } from 'preact/hooks';
import { validateInputField } from '@/common/utils/form';
import { useAction, useSelector } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import { selectAdminKey } from '@/modules/database/database.selectors';

const formValidation = {
    masterKey(val?: string) {
        return (val && val.length >= 6) || 'optionsPanel.masterKeyTooShort';
    },
} as const;

export const OptionsPanelConnectExpanded: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const encryptedAdminKey = useSelector(selectAdminKey);
    const fetchPasswords = useAction(passwordListActions.fetchPasswords);
    const formRef = useRef(undefined as any);
    const [masterKeyValue, setMasterKeyValue] = useState('');
    const [masterKeyErrors, setMasterKeyErrors] = useState('');

    const handleCancelClick = (): void =>
        switchCurrentVariantName(variantNames.connectCollapsed);

    const handleConfirmClick = async (): Promise<void> => {
        await fetchPasswords(masterKeyValue, encryptedAdminKey);
        switchCurrentVariantName(variantNames.entityFormCollapsed);
    };

    const renderInput = (): VNode => (
        <TextInput
            placeholder="e.g. MyStrongPassword1234"
            hasError={Boolean(masterKeyErrors)}
            name="masterKey"
            value={masterKeyValue}
            onInput={validateInputField(
                'masterKey',
                formRef,
                formValidation,
                setMasterKeyValue,
                setMasterKeyErrors
            )}
        />
    );

    const renderLabel = (): VNode => <Text>optionsPanel.enterMasterKey</Text>;
    const renderError = (): VNode => <Text>{masterKeyErrors}</Text>;
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <form ref={formRef}>
                        <FormControl
                            hasError={Boolean(masterKeyErrors)}
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
                    disabled={Boolean(masterKeyErrors)}
                >
                    <Text>optionsPanel.confirm</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelConnectExpanded.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
