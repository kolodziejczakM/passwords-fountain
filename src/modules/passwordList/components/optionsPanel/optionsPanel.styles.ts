import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { stylelint, theme } from '@/common/theme';
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

const renderDot = ({ isInEditMode }: { isInEditMode: boolean }) => {
    if (isInEditMode) {
        return stylelint.css`
        &::after {
            content: '•';
            font-size: ${theme.fontSizes.xl32};
            color: ${theme.colors.significantGreen};
            display: inline-block;
            position: relative;
            top: -20px;
            left: 8px;
        }`;
    }
};

export const ButtonWrapper = styled('div')`
    display: flex;
    justify-content: center;

    button {
        width: 100%;
    }

    button:first-of-type {
        margin-right: ${theme.spacing.xl30};
    }

    ${renderDot}
`;
