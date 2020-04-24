import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import {
    Wrapper,
    FormControlWrapper,
} from './optionsPanelEntityFormExpanded.styles';
import { VariantProps } from '../optionsPanel.component';
import { variantNames } from '@/modules/passwordList/passwordList.contants';
import { FormControl } from '@/common/components/formControl';
import { ButtonWrapper, Content, ContentWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { useRef } from 'preact/hooks';
import { useInputFormControl } from '@/common/utils/form';
import { TextInput } from '@/common/components/textInput';
import { useAction } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import {
    label,
    login,
    password,
    masterKey,
} from '@/common/utils/formValidators';

const formValidation = {
    label,
    login,
    password,
    masterKey,
} as const;

export const OptionsPanelEntityFormExpanded: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const formRef = useRef(undefined as any);
    const addNewPassword = useAction(passwordListActions.addNewPassword);
    const useInputForm = (fieldName: string) =>
        useInputFormControl(formRef, formValidation, fieldName);

    const [labelInputState, labelInputProps] = useInputForm('label');
    const [loginInputState, loginInputProps] = useInputForm('login');
    const [passwordInputState, passwordInputProps] = useInputForm('password');
    const [masterKeyInputState, masterKeyInputProps] = useInputForm(
        'masterKey'
    );

    const handleCancelClick = (): void =>
        switchCurrentVariantName(variantNames.entityFormCollapsed);

    const handleAddClick = async (): Promise<void> => {
        addNewPassword(
            {
                label: labelInputState.value,
                login: loginInputState.value,
                password: passwordInputState.value,
            },
            masterKeyInputState.value
        );
        switchCurrentVariantName(variantNames.entityFormCollapsed);
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
                <Button onClick={handleAddClick} disabled={isSubmitDisabled}>
                    <Text>optionsPanel.add</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelEntityFormExpanded.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
