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
import { useState } from 'preact/hooks';

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
        renderContent: () => VNode | VNode[];
    };
};

export const OptionsPanel: TypedComponent<Props> = ({
    defaultVariantName,
}: Props) => {
    const [currentVariantName, setCurrentVariantName] = useState(
        defaultVariantName
    );
    const [, setLocation] = useLocation();
    const variants: VariantInstances = {
        /* eslint-disable react/display-name */
        decodeCollapsed: {
            leftBtn: {
                label: 'optionsPanel.settings',
                fn: (): void => {
                    setLocation('/settings');
                },
            },
            rightBtn: {
                label: 'optionsPanel.decode',
                fn: (): void => {
                    setCurrentVariantName(variantNames.decodeExpanded);
                },
            },
            renderContent: () => {
                return <Content>decodeCollapsed content goes here!</Content>;
            },
        },
        decodeExpanded: {
            leftBtn: {
                label: 'optionsPanel.cancel',
                fn: (): void => {
                    setCurrentVariantName(variantNames.decodeCollapsed);
                },
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
            renderContent: () => {
                return <Content>decodeExpanded content goes here!</Content>;
            },
        },
        addNewCollapsed: {
            leftBtn: {
                label: 'optionsPanel.settings',
                fn: (): void => {
                    setLocation('/settings');
                },
            },
            rightBtn: {
                label: 'optionsPanel.addNew',
                fn: (): void => {
                    setCurrentVariantName(variantNames.addNewExpanded);
                },
            },
            renderContent: () => {
                return <Content>addNewCollapsed content goes here!</Content>;
            },
        },
        addNewExpanded: {
            leftBtn: {
                label: 'optionsPanel.cancel',
                fn: (): void => {
                    setCurrentVariantName(variantNames.addNewCollapsed);
                },
            },
            rightBtn: {
                label: 'optionsPanel.add',
                fn: () => {
                    // TODO: dispatchAction addNewPassword
                },
            },
            renderContent: () => {
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
