import { h, VNode, Fragment } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { route } from 'preact-router';
import {
    Wrapper,
    Header,
    Heading,
    FormWrapper,
    FormControlWrapper,
    DescriptiveText,
    LabelWrapper,
    NoteLabelWrapper,
    ControlsWrapper,
} from './settings.styles';
import { Text } from '@/modules/localisation/components/text';
import { useRef, useState } from 'preact/hooks';
import { validateInputField } from '@/common/utils/form';
import { TextInput } from '@/common/components/textInput';
import { FormControl } from '@/common/components/formControl';
import { renderIfTrue } from '@/common/utils/rendering';
import { Button } from '@/common/components/button';
import { useAction, store } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.model';

const formValidation = {
    adminKey(val?: string): boolean | string {
        return (val && val.length >= 10) || 'settings.adminKeyTooShort';
    },
    masterKey(val?: string): boolean | string {
        return (val && val.length >= 6) || 'optionsPanel.masterKeyTooShort';
    },
} as const;

export const Settings: TypedComponent<Props> = () => {
    const fetchPasswords = useAction(passwordListActions(store).fetchPasswords);
    const formRef = useRef(undefined as any);
    const [adminKeyValue, setAdminKeyValue] = useState('');
    const [adminKeyErrors, setAdminKeyErrors] = useState('');

    const [masterKeyValue, setMasterKeyValue] = useState('');
    const [masterKeyErrors, setMasterKeyErrors] = useState('');

    const handleConnectClick = async (): Promise<void> => {
        await fetchPasswords(masterKeyValue, adminKeyValue);
        route('/app');
    };
    const handleBackClick = (): void => {
        history.back();
    };

    const renderAdminKeyInput = (): VNode => (
        <TextInput
            placeholder="92xIJf_ge234kalfnqql4o25ou4334201"
            hasError={Boolean(adminKeyErrors)}
            name="adminKey"
            value={adminKeyValue}
            onInput={validateInputField(
                'adminKey',
                formRef,
                formValidation,
                setAdminKeyValue,
                setAdminKeyErrors
            )}
        />
    );

    const renderMasterKeyInput = (): VNode => (
        <TextInput
            placeholder="myMasterPassword1234"
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

    const renderNoteLabel = (labelDescription: string, shouldRender: boolean) =>
        renderIfTrue(() => (
            <NoteLabelWrapper>
                <Text>settings.noteLabel</Text>{' '}
                <DescriptiveText>
                    <Text>{labelDescription}</Text>
                </DescriptiveText>
            </NoteLabelWrapper>
        ))(shouldRender);

    const renderLabel = (
        label: string,
        labelDescription: string,
        noteLabelDescription: string,
        shouldRenderNote = false
    ) => (): VNode => {
        return (
            <Fragment>
                <LabelWrapper>
                    <Text>{label}</Text> -{' '}
                    <DescriptiveText>
                        <Text>{labelDescription}</Text>
                    </DescriptiveText>
                </LabelWrapper>
                {renderNoteLabel(noteLabelDescription, shouldRenderNote)}
            </Fragment>
        );
    };
    const renderError = (error: string) => (): VNode => <Text>{error}</Text>;

    return (
        <Wrapper>
            <Header>
                <Heading>
                    <Text>settings.connectToDB</Text>
                </Heading>
            </Header>
            <FormWrapper>
                <form ref={formRef}>
                    <FormControlWrapper>
                        <FormControl
                            hasError={Boolean(adminKeyErrors)}
                            renderLabel={renderLabel(
                                'settings.adminKeyLabel',
                                'settings.adminKeyLabelDescription',
                                'settings.noteLabelDescriptionAdminKey'
                            )}
                            renderInput={renderAdminKeyInput}
                            renderError={renderError(adminKeyErrors)}
                        />
                    </FormControlWrapper>
                    <FormControlWrapper>
                        <FormControl
                            hasError={Boolean(masterKeyErrors)}
                            renderLabel={renderLabel(
                                'settings.masterKeyLabel',
                                'settings.masterKeyLabelDescription',
                                'settings.noteLabelDescription',
                                true
                            )}
                            renderInput={renderMasterKeyInput}
                            renderError={renderError(masterKeyErrors)}
                        />
                    </FormControlWrapper>
                    <ControlsWrapper>
                        <Button onClick={handleBackClick}>
                            <Text>settings.back</Text>
                        </Button>
                        <Button onClick={handleConnectClick}>
                            <Text>settings.connect</Text>
                        </Button>
                    </ControlsWrapper>
                </form>
            </FormWrapper>
        </Wrapper>
    );
};

export interface Props {}
