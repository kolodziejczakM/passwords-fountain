import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './optionsPanelConnectExpanded.styles';
import { ButtonWrapper, Content, ContentWrapper } from '../optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/components/text';
import { VariantProps } from '../optionsPanel.component';
import { optionsPanelVariantNames } from '@/modules/passwordList/passwordList.constants';
import { FormControl } from '@/common/components/formControl';
import { TextInput } from '@/common/components/textInput';
import { useEffect, useRef } from 'preact/hooks';
import { useAction, useSelector } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import { selectAdminKey } from '@/modules/database/database.selectors';
import { masterKey } from '@/common/utils/formValidators';
import { useInputFormControl } from '@/common/utils/form';

const formValidation = { masterKey } as const;

export const OptionsPanelConnectExpanded: TypedComponent<VariantProps> = ({
    switchCurrentVariantName,
}: VariantProps) => {
    const encryptedAdminKey = useSelector(selectAdminKey);
    const fetchPasswords = useAction(passwordListActions.fetchPasswords);
    const formRef = useRef(undefined as any);
    const inputRef = useRef(undefined as any);
    const [masterKeyInputState, masterKeyInputProps] = useInputFormControl(
        formRef,
        formValidation,
        'masterKey'
    );

    useEffect(() => {
        inputRef.current.base.focus();
    }, [inputRef]);

    const handleCancelClick = (): void =>
        switchCurrentVariantName(optionsPanelVariantNames.connectCollapsed);

    const handleConfirmClick = async (e: Event): Promise<void> => {
        e.preventDefault();

        if (formRef.current?.isValid) {
            fetchPasswords(masterKeyInputState.value, encryptedAdminKey);
        }
    };

    const renderInput = (id: string): VNode => (
        <TextInput
            ref={inputRef}
            id={id}
            type="password"
            placeholder="e.g. MyStrongPassword1234"
            {...masterKeyInputProps}
        />
    );

    const renderLabel = (): VNode => <Text>optionsPanel.enterMasterKey</Text>;
    const renderError = (): VNode => <Text>{masterKeyInputState.errors}</Text>;
    return (
        <Wrapper>
            <ContentWrapper>
                <Content>
                    <form ref={formRef} onSubmit={handleConfirmClick}>
                        <FormControl
                            id={masterKeyInputProps.name}
                            hasError={masterKeyInputProps.hasError}
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
                    disabled={!formRef.current?.isValid}
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
