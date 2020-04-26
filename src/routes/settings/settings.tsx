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
import { useRef } from 'preact/hooks';
import { FormControl } from '@/common/components/formControl';
import { TextInput } from '@/common/components/textInput';
import { renderIfTrue } from '@/common/utils/rendering';
import { Button } from '@/common/components/button';
import { useAction } from '@/store';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import { adminKey, masterKey } from '@/common/utils/formValidators';
import { useInputFormControl } from '@/common/utils/form';

const formValidation = {
    adminKey,
    masterKey,
} as const;

export const Settings: TypedComponent<Props> = () => {
    const fetchPasswords = useAction(passwordListActions.fetchPasswords);
    const formRef = useRef<HTMLFormElement>(undefined as any);
    const [adminKeyInputState, adminKeyInputProps] = useInputFormControl(
        formRef,
        formValidation,
        'adminKey'
    );
    const [masterKeyInputState, masterKeyInputProps] = useInputFormControl(
        formRef,
        formValidation,
        'masterKey'
    );

    const handleConnectClick = async (): Promise<void> => {
        await fetchPasswords(
            masterKeyInputState.value,
            adminKeyInputState.value
        );
        route('/app');
    };
    const handleBackClick = (): void => {
        history.back();
    };

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
                            hasError={Boolean(adminKeyInputProps.hasError)}
                            renderLabel={renderLabel(
                                'settings.adminKeyLabel',
                                'settings.adminKeyLabelDescription',
                                'settings.noteLabelDescriptionAdminKey'
                            )}
                            renderInput={(): VNode => (
                                <TextInput
                                    type="password"
                                    placeholder="92xIJf_ge234kalfnqql4o25ou4334201"
                                    {...adminKeyInputProps}
                                />
                            )}
                            renderError={renderError(adminKeyInputState.errors)}
                        />
                    </FormControlWrapper>
                    <FormControlWrapper>
                        <FormControl
                            hasError={Boolean(masterKeyInputProps.hasError)}
                            renderLabel={renderLabel(
                                'settings.masterKeyLabel',
                                'settings.masterKeyLabelDescription',
                                'settings.noteLabelDescription',
                                true
                            )}
                            renderInput={(): VNode => (
                                <TextInput
                                    type="password"
                                    placeholder="myMasterPassword1234"
                                    {...masterKeyInputProps}
                                />
                            )}
                            renderError={renderError(
                                masterKeyInputState.errors
                            )}
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
