import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import {
    Wrapper,
    FormControlWrapper,
} from './optionsPanelEntityFormExpanded.styles';
import { VariantProps } from '../optionsPanel.component';
import { optionsPanelVariantNames } from '@/modules/passwordList/passwordList.constants';
import { FormControl } from '@/common/components/formControl';
import { ButtonWrapper, Content, ContentWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { useRef } from 'preact/hooks';
import { useInputFormControl } from '@/common/utils/form';
import { TextInput } from '@/common/components/textInput';
import { useAction, useSelector } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import {
    label,
    login,
    password,
    masterKey,
} from '@/common/utils/formValidators';
import {
    selectSelectedAndDecryptedEntity,
    selectIsInEditMode,
} from '@/modules/passwordList/passwordList.selectors';
import { selectAdminKey } from '@/modules/database/database.selectors';

const formValidation = {
    label,
    login,
    password,
    masterKey,
} as const;

export const OptionsPanelEntityFormExpanded: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const encryptedAdminKey = useSelector(selectAdminKey);
    const formRef = useRef(undefined as any);
    const addNewPassword = useAction(passwordListActions.addNewPassword);
    const editPassword = useAction(passwordListActions.editPassword);
    const fetchPasswords = useAction(passwordListActions.fetchPasswords);

    const editedEntity = useSelector(selectSelectedAndDecryptedEntity);
    const isInEditMode = useSelector(selectIsInEditMode);
    const actionLabel = isInEditMode ? 'optionsPanel.edit' : 'optionsPanel.add';

    const useInputForm = (fieldName: string, defaultValue?: string) =>
        useInputFormControl(formRef, formValidation, fieldName, defaultValue);

    const [labelInputState, labelInputProps] = useInputForm(
        'label',
        editedEntity.label
    );
    const [loginInputState, loginInputProps] = useInputForm(
        'login',
        editedEntity.login
    );
    const [passwordInputState, passwordInputProps] = useInputForm(
        'password',
        editedEntity.password
    );
    const [masterKeyInputState, masterKeyInputProps] = useInputForm(
        'masterKey'
    );

    const handleCancelClick = (): void =>
        switchCurrentVariantName(optionsPanelVariantNames.entityFormCollapsed);

    const handleAction = async (): Promise<void> => {
        if (isInEditMode) {
            await editPassword(
                {
                    label: labelInputState.value,
                    login: loginInputState.value,
                    password: passwordInputState.value,
                    refId: editedEntity.refId,
                },
                masterKeyInputState.value
            );
        } else {
            await addNewPassword(
                {
                    label: labelInputState.value,
                    login: loginInputState.value,
                    password: passwordInputState.value,
                },
                masterKeyInputState.value
            );
        }
        fetchPasswords(masterKeyInputState.value, encryptedAdminKey);
    };

    const isSubmitDisabled = [
        labelInputState.errors,
        loginInputState.errors,
        passwordInputState.errors,
        masterKeyInputState.errors,
    ].some(Boolean);
    const renderLabel = (label: string) => (): VNode => <Text>{label}</Text>;
    const renderError = (errors: string) => (): VNode => <Text>{errors}</Text>;
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <form ref={formRef}>
                        <FormControlWrapper>
                            <FormControl
                                hasError={labelInputProps.hasError}
                                renderLabel={renderLabel(
                                    'optionsPanel.labelInputLabel'
                                )}
                                renderInput={(): VNode => (
                                    <TextInput
                                        placeholder="e.g. My Bank Account"
                                        {...labelInputProps}
                                    />
                                )}
                                renderError={renderError(
                                    labelInputState.errors
                                )}
                            />
                        </FormControlWrapper>
                        <FormControlWrapper>
                            <FormControl
                                hasError={passwordInputProps.hasError}
                                renderLabel={renderLabel(
                                    'optionsPanel.loginInputLabel'
                                )}
                                renderInput={(): VNode => (
                                    <TextInput
                                        placeholder="e.g. yourmail@yourmail.com"
                                        {...loginInputProps}
                                    />
                                )}
                                renderError={renderError(
                                    loginInputState.errors
                                )}
                            />
                        </FormControlWrapper>
                        <FormControlWrapper>
                            <FormControl
                                hasError={passwordInputProps.hasError}
                                renderLabel={renderLabel(
                                    'optionsPanel.passwordInputLabel'
                                )}
                                renderInput={(): VNode => (
                                    <TextInput
                                        type="password"
                                        placeholder="e.g. myPassWord1234"
                                        {...passwordInputProps}
                                    />
                                )}
                                renderError={renderError(
                                    passwordInputState.errors
                                )}
                            />
                        </FormControlWrapper>
                        <FormControlWrapper>
                            <FormControl
                                hasError={masterKeyInputProps.hasError}
                                renderLabel={renderLabel(
                                    'optionsPanel.masterKey'
                                )}
                                renderInput={(): VNode => (
                                    <TextInput
                                        type="password"
                                        placeholder="e.g. MyStrongPassword1234"
                                        {...masterKeyInputProps}
                                    />
                                )}
                                renderError={renderError(
                                    masterKeyInputState.errors
                                )}
                            />
                        </FormControlWrapper>
                    </form>
                </Content>
            </ContentWrapper>
            <ButtonWrapper>
                <Button onClick={handleCancelClick}>
                    <Text>optionsPanel.cancel</Text>
                </Button>
                <Button onClick={handleAction} disabled={isSubmitDisabled}>
                    <Text>{actionLabel}</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelEntityFormExpanded.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
