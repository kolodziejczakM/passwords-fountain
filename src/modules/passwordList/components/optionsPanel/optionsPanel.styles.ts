import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
import {
    optionsPanelVariantNames,
    OptionsPanelVariantName,
} from '@/modules/passwordList/passwordList.constants';
setPragma(h);

const getBorderStyle = ({
    currentVariantName,
}: {
    currentVariantName: OptionsPanelVariantName;
}): string => {
    switch (currentVariantName) {
        case optionsPanelVariantNames.connectCollapsed:
        case optionsPanelVariantNames.entityFormCollapsed:
            return `border: 2px solid ${theme.colors.pastelGreen};`;
        case optionsPanelVariantNames.connectExpanded:
        case optionsPanelVariantNames.entityFormExpanded:
            return `border: 2px solid ${theme.colors.significantGreen};`;
    }

    return `border: 2px solid ${theme.colors.pastelGreen};`;
};

export const Wrapper = styled('section')`
    ${getBorderStyle}
    z-index: ${theme.zIndexes.xs};
    position: absolute;
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
    width: calc(100% - 36px);
    max-width: ${theme.breakpoints.s480};
    background: ${theme.colors.white};
    padding: ${theme.spacing.m18};
`;

export const ContentWrapper = styled('div')``;

export const Content = styled('div')`
    padding-bottom: ${theme.spacing.m18};
`;

export const ButtonWrapper = styled('div')`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${theme.spacing.xl30};
`;
