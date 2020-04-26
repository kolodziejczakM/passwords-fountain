import { h, Fragment } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { valueof } from '@/common/typings/helpers';
import PropTypes from 'prop-types';
import {
    Wrapper,
    GridWrapper,
    Row,
    Label,
    Value,
    DataWrapper,
    ControlsWrapper,
    FormControlWrapper,
} from './passwordEntity.styles';
import { Text } from '@/modules/localisation/components/text';
import {
    placeholderEntityValue,
    PasswordEntityVulnerablePayload,
} from '@/modules/passwordList/passwordList.constants';
import { useRef, useState } from 'preact/hooks';
import { PasswordEntityRaw } from '@/modules/database/database.service';
import { IconButton } from '@/common/components/iconButton';
import { renderIfTrue } from '@/common/utils/rendering';
import { Prompt } from '@/modules/overlay/components/prompt';
import { useInputFormControl } from '@/common/utils/form';
import { masterKey } from '@/common/utils/formValidators';
import { FormControl } from '@/common/components/formControl';
import { TextInput } from '@/common/components/textInput';
import { Button } from '@/common/components/button';
import { useAction, useSelector } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import { selectSelectedAndDecryptedEntityByRefId } from '@/modules/passwordList/passwordList.selectors';
import { selectAdminKey } from '@/modules/database/database.selectors';

const formValidation = { masterKey } as const;

const promptTypes = {
    invisible: '',
    removal: 'removal',
    decryption: 'decryption',
} as const;

type PromptType = valueof<typeof promptTypes>;

export const PasswordEntity: TypedComponent<Props> = ({
    data,
    isSelected,
    onClick,
}: Props) => {
    const formRef = useRef(undefined as any);
    const [promptType, setPromptType] = useState<PromptType>(
        promptTypes.invisible
    );
    const encryptedAdminKey = useSelector(selectAdminKey);
    const selectedAndDecryptedEntity = useSelector(
        selectSelectedAndDecryptedEntityByRefId(data.ref.id)
    );
    const passwordVisibility =
        Object.keys(selectedAndDecryptedEntity).length !== 0;

    const [masterKeyInputState, masterKeyInputProps] = useInputFormControl(
        formRef,
        formValidation,
        'masterKey'
    );

    const removePassword = useAction(passwordListActions.removePassword);
    const fetchPasswords = useAction(passwordListActions.fetchPasswords);

    const setSelectedAndDecryptedEntity = useAction(
        passwordListActions.setSelectedAndDecryptedEntity
    );
    const resetSelectedAndDecryptedEntity = useAction(
        passwordListActions.resetSelectedAndDecryptedEntity
    );

    const resetPromptState = (): void => {
        setPromptType(promptTypes.invisible);
        masterKeyInputState.setValue('');
    };

    const handleClick = (): void => {
        onClick(isSelected ? null : data);
        resetSelectedAndDecryptedEntity();
        resetPromptState();
    };

    const handleDecryptionPromptConfirm = async (): Promise<void> => {
        const { decrypt } = await import('@/modules/cipher/cipher.service');
        const { login, password } = decrypt(
            data.data.value,
            masterKeyInputState.value,
            true
        ) as PasswordEntityVulnerablePayload;

        setSelectedAndDecryptedEntity({
            refId: data.ref.id,
            label: data.data.label,
            login,
            password,
        });
    };

    const handleRemovalPromptConfirm = async (): Promise<void> => {
        await removePassword(data.ref.id);
        fetchPasswords(masterKeyInputState.value, encryptedAdminKey);
    };

    const handlePromptConfirm = (): void => {
        if (promptType === promptTypes.decryption) {
            handleDecryptionPromptConfirm();
        } else {
            handleRemovalPromptConfirm();
        }

        resetPromptState();
    };

    const handleControlClick = (nextPromptType: PromptType) => (
        e: Event
    ): void => {
        e.stopPropagation();
        if (promptType) {
            return;
        }

        setPromptType(nextPromptType);
    };

    const handleFilledEyeClick = (e: Event): void => {
        e.stopPropagation();
        resetSelectedAndDecryptedEntity();
    };

    // TODO: move to separated component.
    const renderPrompt = renderIfTrue(() => {
        const confirmBtnLabel =
            promptType === promptTypes.decryption
                ? 'prompt.decrypt'
                : 'prompt.remove';
        return (
            <Prompt
                renderContent={() => (
                    <form ref={formRef}>
                        <FormControlWrapper>
                            <FormControl
                                hasError={masterKeyInputProps.hasError}
                                renderLabel={() => (
                                    <Text>optionsPanel.enterMasterKey</Text>
                                )}
                                renderError={() => (
                                    <Text>{masterKeyInputState.errors}</Text>
                                )}
                                renderInput={() => (
                                    <TextInput
                                        type="password"
                                        placeholder="e.g. MyStrongPassword1234"
                                        {...masterKeyInputProps}
                                    />
                                )}
                            />
                        </FormControlWrapper>
                    </form>
                )}
                renderControls={() => (
                    <Fragment>
                        <Button onClick={resetPromptState}>
                            <Text>optionsPanel.cancel</Text>
                        </Button>
                        <Button
                            onClick={handlePromptConfirm}
                            disabled={masterKeyInputProps.hasError}
                        >
                            <Text>{confirmBtnLabel}</Text>
                        </Button>
                    </Fragment>
                )}
            />
        );
    });

    const renderEyeIcon = () => {
        if (passwordVisibility) {
            return (
                <IconButton
                    iconName="eyeFilled"
                    onClick={handleFilledEyeClick}
                />
            );
        }
        return (
            <IconButton
                iconName="eye"
                onClick={handleControlClick(promptTypes.decryption)}
            />
        );
    };

    const renderControls = renderIfTrue(() => {
        return (
            <Fragment>
                <IconButton
                    iconName="bin"
                    onClick={handleControlClick(promptTypes.removal)}
                />
                {renderEyeIcon()}
            </Fragment>
        );
    });

    return (
        <Wrapper onClick={handleClick} isSelected={isSelected}>
            <GridWrapper>
                <DataWrapper>
                    <Row>
                        <Label>
                            <Text>passwordEntity.label</Text>
                        </Label>{' '}
                        - <Value>{data.data.label}</Value>
                    </Row>
                    <Row>
                        <Label>
                            <Text>passwordEntity.login</Text>
                        </Label>{' '}
                        -{' '}
                        <Value>
                            {selectedAndDecryptedEntity.login ??
                                placeholderEntityValue}
                        </Value>
                    </Row>
                    <Row>
                        <Label>
                            <Text>passwordEntity.password</Text>
                        </Label>{' '}
                        -{' '}
                        <Value>
                            {selectedAndDecryptedEntity.password ??
                                placeholderEntityValue}
                        </Value>
                    </Row>
                </DataWrapper>
                <ControlsWrapper>{renderControls(isSelected)}</ControlsWrapper>
            </GridWrapper>
            {renderPrompt(Boolean(promptType) && isSelected)}
        </Wrapper>
    );
};

interface Props {
    isSelected: boolean;
    data: PasswordEntityRaw;
    onClick: Function;
}

PasswordEntity.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};
