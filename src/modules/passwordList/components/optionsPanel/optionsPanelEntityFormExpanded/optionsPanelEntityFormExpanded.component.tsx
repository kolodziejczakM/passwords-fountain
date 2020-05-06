import { h, VNode, Fragment } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import {
    Wrapper,
    FormControlWrapper,
    NoteLabelWrapper,
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
    encryptionKey,
} from '@/common/utils/formValidators';
import {
    selectSelectedAndDecryptedEntity,
    selectIsInEditMode,
} from '@/modules/passwordList/passwordList.selectors';
import { selectAdminKey } from '@/modules/database/database.selectors';
import { renderIfTrue } from '@/common/utils/rendering';

const formValidation = {
    label,
    login,
    password,
    encryptionKey,
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
    const [encryptionKeyInputState, encryptionKeyInputProps] = useInputForm(
        'encryptionKey'
    );

    const handleCancelClick = (): void =>
        switchCurrentVariantName(optionsPanelVariantNames.entityFormCollapsed);

    const handleAction = async (e: Event): Promise<void> => {
        e.preventDefault();

        if (!formRef.current?.isValid) {
            return;
        }

        if (isInEditMode) {
            await editPassword(
                {
                    label: labelInputState.value,
                    login: loginInputState.value,
                    password: passwordInputState.value,
                    refId: editedEntity.refId,
                },
                encryptionKeyInputState.value
            );
        } else {
            await addNewPassword(
                {
                    label: labelInputState.value,
                    login: loginInputState.value,
                    password: passwordInputState.value,
                },
                encryptionKeyInputState.value
            );
        }
        fetchPasswords(encryptionKeyInputState.value, encryptedAdminKey);
    };

    const renderError = (errors: string) => (): VNode => <Text>{errors}</Text>;
    const renderLabel = (label: string, noteText?: string) => (): VNode => (
        <Fragment>
            <Text>{label}</Text>
            {renderIfTrue(() => (
                <NoteLabelWrapper>
                    <Text>settings.noteLabel</Text>{' '}
                    <Text>{noteText as string}</Text>
                </NoteLabelWrapper>
            ))(Boolean(noteText))}
        </Fragment>
    );
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <form ref={formRef} onSubmit={handleAction}>
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
                                hasError={loginInputProps.hasError}
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
                                hasError={encryptionKeyInputProps.hasError}
                                renderLabel={renderLabel(
                                    'optionsPanel.encryptionKey',
                                    'optionsPanel.noteEncryptionKey'
                                )}
                                renderInput={(): VNode => (
                                    <TextInput
                                        type="password"
                                        placeholder="e.g. MyStrongPassword1234"
                                        {...encryptionKeyInputProps}
                                    />
                                )}
                                renderError={renderError(
                                    encryptionKeyInputState.errors
                                )}
                            />
                        </FormControlWrapper>
                        <input type="submit" hidden />
                    </form>
                </Content>
            </ContentWrapper>
            <ButtonWrapper>
                <Button onClick={handleCancelClick}>
                    <Text>optionsPanel.cancel</Text>
                </Button>
                <Button
                    onClick={handleAction}
                    disabled={!formRef.current?.isValid}
                >
                    <Text>{actionLabel}</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

OptionsPanelEntityFormExpanded.propTypes = {
    switchCurrentVariantName: PropTypes.func.isRequired,
};
