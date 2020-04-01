import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import {
    Wrapper,
    ContentWrapper,
    Content,
    ButtonWrapper,
} from './optionsPanel.styles';
import { Button } from '@/common/components/button';
import { Text } from '@/modules/localisation/localisation.context';
import { useLocation } from 'wouter-preact';
import { useState, useRef } from 'preact/hooks';
import { TextInput } from '@/common/components/textInput';
import { FormControl } from '@/common/components/formControl';
import { validate } from 'formee';

enum variantNames {
    decodeCollapsed = 'decodeCollapsed',
    decodeExpanded = 'decodeExpanded',
    addNewCollapsed = 'addNewCollapsed',
    addNewExpanded = 'addNewExpanded',
}

type VariantName = keyof typeof variantNames;

interface VariantButton {
    label: string;
    fn: (...args: any[]) => any;
}

type VariantInstances = {
    [key in VariantName]: {
        leftBtn: VariantButton;
        rightBtn: VariantButton;
        renderContent: () => VNode | VNode[] | null;
    };
};

const shelfKeyFormConfig = {
    shelfKey(val?: string) {
        if (!val) return 'optionsPanel.shelfKeyTooShort';
        return val.length >= 6 || 'optionsPanel.shelfKeyTooShort';
    },
} as const;

const newPasswordFormConfig = {
    // TODO
} as const;

export const OptionsPanel: TypedComponent<Props> = ({
    defaultVariantName,
}: Props) => {
    const shelfKeyForm = useRef(undefined as any);
    const [shelfKeyValue, setShelfKeyValue] = useState('');
    const [shelfKeyErrors, setShelfKeyErrors] = useState('');

    const shelfKeyFormValidate = (value: string | null): void => {
        const errors: { shelfKey?: string } = validate(
            shelfKeyForm.current,
            shelfKeyFormConfig
        );

        setShelfKeyValue(value ?? '');
        setShelfKeyErrors(errors.shelfKey ?? '');
    };

    const [currentVariantName, setCurrentVariantName] = useState(
        defaultVariantName
    );
    const [, setLocation] = useLocation();
    const variants: VariantInstances = {
        /* eslint-disable react/display-name */
        decodeCollapsed: {
            leftBtn: {
                label: 'optionsPanel.settings',
                fn: (): void => setLocation('/settings'),
            },
            rightBtn: {
                label: 'optionsPanel.decode',
                fn: (): void =>
                    setCurrentVariantName(variantNames.decodeExpanded),
            },
            renderContent: () => null,
        },
        decodeExpanded: {
            leftBtn: {
                label: 'optionsPanel.cancel',
                fn: (): void =>
                    setCurrentVariantName(variantNames.decodeCollapsed),
            },
            rightBtn: {
                label: 'optionsPanel.confirm',
                fn: (): void => {
                    // TODO: dispatchAction decode
                    // TODO: useSelector to check if decoded successfully or not
                    const successfulDecode = true;
                    if (successfulDecode) {
                        setCurrentVariantName(variantNames.addNewCollapsed);
                    } else {
                        // TODO: Show error snackbar
                    }
                },
            },
            renderContent: (): VNode => {
                return (
                    <Content>
                        <form ref={shelfKeyForm}>
                            <FormControl
                                hasError={Boolean(shelfKeyErrors)}
                                renderLabel={() => (
                                    <Text>optionsPanel.enterShelfKey</Text>
                                )}
                                renderInput={() => (
                                    <TextInput
                                        placeholder="e.g. MyStrongPassword1234"
                                        hasError={Boolean(shelfKeyErrors)}
                                        name="shelfKey"
                                        value={shelfKeyValue}
                                        onInput={({
                                            target,
                                        }: {
                                            target: HTMLInputElement;
                                        }): void => {
                                            shelfKeyFormValidate(target.value);
                                        }}
                                    />
                                )}
                                renderError={() => (
                                    <div>
                                        <Text>{shelfKeyErrors}</Text>
                                    </div>
                                )}
                            />
                        </form>
                    </Content>
                );
            },
        },
        addNewCollapsed: {
            leftBtn: {
                label: 'optionsPanel.settings',
                fn: (): void => setLocation('/settings'),
            },
            rightBtn: {
                label: 'optionsPanel.addNew',
                fn: (): void =>
                    setCurrentVariantName(variantNames.addNewExpanded),
            },
            renderContent: (): VNode => {
                return <Content>addNewCollapsed content goes here!</Content>;
            },
        },
        addNewExpanded: {
            leftBtn: {
                label: 'optionsPanel.cancel',
                fn: (): void =>
                    setCurrentVariantName(variantNames.addNewCollapsed),
            },
            rightBtn: {
                label: 'optionsPanel.add',
                fn: (): void => {
                    // TODO: dispatchAction addNewPassword
                },
            },
            renderContent: (): VNode => {
                return <Content>addNewExpanded content goes here!</Content>;
            },
        },
    };

    const currentVariant = variants[currentVariantName as VariantName];
    return (
        <Wrapper>
            <ContentWrapper>{currentVariant.renderContent()}</ContentWrapper>
            <ButtonWrapper>
                <Button onClick={currentVariant.leftBtn.fn}>
                    <Text>{currentVariant.leftBtn.label}</Text>
                </Button>
                <Button onClick={currentVariant.rightBtn.fn}>
                    <Text>{currentVariant.rightBtn.label}</Text>
                </Button>
            </ButtonWrapper>
        </Wrapper>
    );
};

interface Props {
    defaultVariantName?: VariantName;
}

OptionsPanel.propTypes = forbidExtraProps({
    defaultVariantName: PropTypes.any,
});

OptionsPanel.defaultProps = {
    defaultVariantName: variantNames.decodeCollapsed,
};
