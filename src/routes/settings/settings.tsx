import { h, VNode, Fragment } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
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
import { useLocation } from 'wouter-preact';
import { validateInputField } from '@/common/utils/form';
import { TextInput } from '@/common/components/textInput';
import { FormControl } from '@/common/components/formControl';
import { renderIfTrue } from '@/common/utils/rendering';
import { Button } from '@/common/components/button';

const formValidation = {
    adminKey(val?: string): boolean | string {
        return (val && val.length >= 10) || 'settings.adminKeyTooShort';
    },
    shelfKey(val?: string): boolean | string {
        return (val && val.length >= 6) || 'optionsPanel.shelfKeyTooShort';
    },
} as const;

export const Settings: TypedComponent<{}> = () => {
    // TODO: Add info that here user sees hashed version of admin key (when coming back)
    const [, setLocation] = useLocation();
    const formRef = useRef(undefined as any);
    const [adminKeyValue, setAdminKeyValue] = useState('');
    const [adminKeyErrors, setAdminKeyErrors] = useState('');

    const [shelfKeyValue, setShelfKeyValue] = useState('');
    const [shelfKeyErrors, setShelfKeyErrors] = useState('');

    const isFirstTimeOnDevice = true;
    const heading = isFirstTimeOnDevice
        ? 'settings.connectToDB'
        : 'settings.currentDBConnection';

    const connectButtonLabel = isFirstTimeOnDevice
        ? 'settings.connect'
        : 'settings.reConnect';

    const handleConnectClick = () => {
        // TODO: connect / re-connect action
    };
    const handleBackClick = () => setLocation('/app');

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

    const renderShelfKeyInput = (): VNode => (
        <TextInput
            placeholder="myShelfPassword1234"
            hasError={Boolean(shelfKeyErrors)}
            name="shelfKey"
            value={shelfKeyValue}
            onInput={validateInputField(
                'shelfKey',
                formRef,
                formValidation,
                setShelfKeyValue,
                setShelfKeyErrors
            )}
        />
    );

    const renderNoteLabel = renderIfTrue(
        (): VNode => (
            <NoteLabelWrapper>
                <Text>settings.noteLabel</Text>{' '}
                <DescriptiveText>
                    <Text>settings.noteLabelDescription</Text>
                </DescriptiveText>
            </NoteLabelWrapper>
        )
    );

    const renderLabel = (
        label: string,
        labelDescription: string,
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
                {renderNoteLabel(shouldRenderNote)}
            </Fragment>
        );
    };
    const renderError = (error: string) => (): VNode => <Text>{error}</Text>;

    return (
        <Wrapper>
            <Header>
                <Heading>
                    <Text>{heading}</Text>
                </Heading>
            </Header>
            <FormWrapper>
                <form ref={formRef}>
                    <FormControlWrapper>
                        <FormControl
                            hasError={Boolean(adminKeyErrors)}
                            renderLabel={renderLabel(
                                'settings.adminKeyLabel',
                                'settings.adminKeyLabelDescription'
                            )}
                            renderInput={renderAdminKeyInput}
                            renderError={renderError(adminKeyErrors)}
                        />
                    </FormControlWrapper>
                    <FormControlWrapper>
                        <FormControl
                            hasError={Boolean(shelfKeyErrors)}
                            renderLabel={renderLabel(
                                'settings.shelfKeyLabel',
                                'settings.shelfKeyLabelDescription',
                                true
                            )}
                            renderInput={renderShelfKeyInput}
                            renderError={renderError(shelfKeyErrors)}
                        />
                    </FormControlWrapper>
                    <ControlsWrapper>
                        <Button onClick={handleBackClick}>
                            <Text>settings.back</Text>
                        </Button>
                        <Button onClick={handleConnectClick}>
                            <Text>{connectButtonLabel}</Text>
                        </Button>
                    </ControlsWrapper>
                </form>
            </FormWrapper>
        </Wrapper>
    );
};
