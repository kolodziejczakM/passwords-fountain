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
import { useRef, useState } from 'preact/hooks';
import { validateInputField } from '@/common/utils/form';
import { TextInput } from '@/common/components/textInput';

const formValidation = {
    label(val?: string): boolean | string {
        return (val && val.length >= 4) || 'optionsPanel.labelTooShort';
    },
    login(val?: string): boolean | string {
        return (val && val.length >= 6) || 'optionsPanel.loginTooShort';
    },
    password(val?: string): boolean | string {
        return (val && val.length >= 4) || 'optionsPanel.passwordTooShort';
    },
} as const;

export const OptionsPanelEntityFormExpanded: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const formRef = useRef(undefined as any);
    const [labelValue, setLabelValue] = useState('');
    const [labelErrors, setLabelErrors] = useState('');

    const [loginValue, setLoginValue] = useState('');
    const [loginErrors, setLoginErrors] = useState('');

    const [passwordValue, setPasswordValue] = useState('');
    const [passwordErrors, setPasswordErrors] = useState('');

    const handleCancelClick = (): void =>
        switchCurrentVariantName(variantNames.entityFormCollapsed);

    const handleAddClick = (): void => {
        // TODO: dispatchAction addNewPassword
        switchCurrentVariantName(variantNames.entityFormCollapsed);
    };

    const renderLabelInput = (): VNode => (
        <TextInput
            placeholder="e.g. My Bank Account"
            hasError={Boolean(labelErrors)}
            name="label"
            value={labelValue}
            onInput={validateInputField(
                'label',
                formRef,
                formValidation,
                setLabelValue,
                setLabelErrors
            )}
        />
    );

    const renderLoginInput = (): VNode => (
        <TextInput
            placeholder="e.g. yourmail@yourmail.com"
            hasError={Boolean(loginErrors)}
            name="login"
            value={loginValue}
            onInput={validateInputField(
                'login',
                formRef,
                formValidation,
                setLoginValue,
                setLoginErrors
            )}
        />
    );

    const renderPasswordInput = (): VNode => (
        <TextInput
            placeholder="e.g. myPassWord1234"
            hasError={Boolean(passwordErrors)}
            name="password"
            value={passwordValue}
            onInput={validateInputField(
                'password',
                formRef,
                formValidation,
                setPasswordValue,
                setPasswordErrors
            )}
        />
    );

    const isSubmitDisabled = [labelErrors, loginErrors, passwordErrors].some(
        Boolean
    );
    const renderLabel = (label: string) => (): VNode => <Text>{label}</Text>;
    const renderError = (errors: string) => (): VNode => <Text>{errors}</Text>;
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <form ref={formRef}>
                        <FormControlWrapper>
                            <FormControl
                                hasError={Boolean(labelErrors)}
                                renderLabel={renderLabel(
                                    'optionsPanel.labelInputLabel'
                                )}
                                renderInput={renderLabelInput}
                                renderError={renderError(labelErrors)}
                            />
                        </FormControlWrapper>
                        <FormControlWrapper>
                            <FormControl
                                hasError={Boolean(loginErrors)}
                                renderLabel={renderLabel(
                                    'optionsPanel.loginInputLabel'
                                )}
                                renderInput={renderLoginInput}
                                renderError={renderError(loginErrors)}
                            />
                        </FormControlWrapper>
                        <FormControlWrapper>
                            <FormControl
                                hasError={Boolean(passwordErrors)}
                                renderLabel={renderLabel(
                                    'optionsPanel.passwordInputLabel'
                                )}
                                renderInput={renderPasswordInput}
                                renderError={renderError(passwordErrors)}
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
