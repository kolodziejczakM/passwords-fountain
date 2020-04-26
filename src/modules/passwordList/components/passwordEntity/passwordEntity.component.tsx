import { h, Fragment } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
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
import { useRef } from 'preact/hooks';
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

const formValidation = { masterKey } as const;

export const PasswordEntity: TypedComponent<Props> = ({
    data,
    isSelected,
    onClick,
    promptVisibility,
    setPromptVisibility,
}: Props) => {
    const formRef = useRef(undefined as any);
    const setSelectedAndDecryptedEntity = useAction(
        passwordListActions.setSelectedAndDecryptedEntity
    );
    const resetSelectedAndDecryptedEntity = useAction(
        passwordListActions.resetSelectedAndDecryptedEntity
    );
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

    const handleClick = (): void => {
        onClick(isSelected ? null : data);
        resetSelectedAndDecryptedEntity();
        setPromptVisibility(false);
        masterKeyInputState.setValue('');
    };

    const handlePromptConfirm = async (): Promise<void> => {
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
        setPromptVisibility(false);
        masterKeyInputState.setValue('');
    };

    const handlePromptCancel = (): void => {
        setPromptVisibility(false);
        masterKeyInputState.setValue('');
    };

    const handleEyeClick = (e: Event): void => {
        e.stopPropagation();
        if (promptVisibility) {
            return;
        }

        setPromptVisibility(true);
    };

    const handleFilledEyeClick = (e: Event): void => {
        e.stopPropagation();
        resetSelectedAndDecryptedEntity();
    };

    const renderDecryptionPrompt = renderIfTrue(() => (
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
                    <Button onClick={handlePromptCancel}>
                        <Text>optionsPanel.cancel</Text>
                    </Button>
                    <Button
                        onClick={handlePromptConfirm}
                        disabled={masterKeyInputProps.hasError}
                    >
                        <Text>optionsPanel.confirm</Text>
                    </Button>
                </Fragment>
            )}
        />
    ));

    const renderEyeIcon = () => {
        if (passwordVisibility) {
            return (
                <IconButton
                    iconName="eyeFilled"
                    onClick={handleFilledEyeClick}
                />
            );
        }
        return <IconButton iconName="eye" onClick={handleEyeClick} />;
    };

    const renderControls = renderIfTrue(() => {
        return (
            <Fragment>
                <IconButton
                    iconName="bin"
                    onClick={(e: any): void => {
                        e.stopPropagation();
                    }}
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
            {renderDecryptionPrompt(promptVisibility && isSelected)}
        </Wrapper>
    );
};

interface Props {
    isSelected: boolean;
    data: PasswordEntityRaw;
    onClick: Function;
    promptVisibility: boolean;
    setPromptVisibility: Function;
}

PasswordEntity.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
    promptVisibility: PropTypes.bool.isRequired,
    setPromptVisibility: PropTypes.func.isRequired,
};
