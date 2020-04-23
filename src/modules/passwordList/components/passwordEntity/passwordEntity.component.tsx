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
import { placeholderEntityValue } from '@/modules/passwordList/passwordList.contants';
import { useRef, useState } from 'preact/hooks';
import {
    PasswordEntityRaw,
    PasswordEntityPayload,
    PasswordEntityVulnerablePayload,
} from '@/modules/database/database.service';
import { IconButton } from '@/common/components/iconButton';
import { renderIfTrue } from '@/common/utils/rendering';
import { Prompt } from '@/modules/overlay/components/prompt';
import { useInputFormControl } from '@/common/utils/form';
import { masterKey } from '@/common/utils/formValidators';
import { FormControl } from '@/common/components/formControl';
import { TextInput } from '@/common/components/textInput';
import { Button } from '@/common/components/button';

const formValidation = { masterKey } as const;

export const PasswordEntity: TypedComponent<Props> = ({
    data,
    isSelected,
    onClick,
    promptVisibility,
    setPromptVisibility,
}: Props) => {
    const formRef = useRef(undefined as any);
    const [passwordVisibility, setPasswordVisibility] = useState(false);
    const [entity, setEntity] = useState<PasswordEntityPayload>({
        label: data.data.label,
        login: placeholderEntityValue,
        password: placeholderEntityValue,
    });

    const [masterKeyInputState, masterKeyInputProps] = useInputFormControl(
        formRef,
        formValidation,
        'masterKey'
    );

    const handleClick = (): void => {
        onClick(isSelected ? null : data);
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

        setEntity((prevState: PasswordEntityPayload) => ({
            label: prevState.label,
            login,
            password,
        }));

        setPasswordVisibility(true);
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
        setEntity((prevState: PasswordEntityPayload) => ({
            label: prevState.label,
            login: placeholderEntityValue,
            password: placeholderEntityValue,
        }));
        setPasswordVisibility(false);
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
                        - <Value>{entity.label}</Value>
                    </Row>
                    <Row>
                        <Label>
                            <Text>passwordEntity.login</Text>
                        </Label>{' '}
                        - <Value>{entity.login}</Value>
                    </Row>
                    <Row>
                        <Label>
                            <Text>passwordEntity.password</Text>
                        </Label>{' '}
                        - <Value>{entity.password}</Value>
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
