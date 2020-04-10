import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, stylelint } from '@/common/theme';
import {
    snackbarTypes,
    SnackbarType,
} from '@/modules/overlay/overlay.constants';
setPragma(h);

const info = stylelint.css`
    border: 1px solid ${theme.colors.primaryBlue};
    border-top: 4px solid ${theme.colors.primaryBlue};
`;

const success = stylelint.css`
    border: 1px solid ${theme.colors.primaryGreen};
    border-top: 4px solid ${theme.colors.primaryGreen};
`;

const error = stylelint.css`
    border: 1px solid ${theme.colors.red};
    border-top: 4px solid ${theme.colors.red};
`;

const getVariantStyles = ({ type }: { type: SnackbarType }): string => {
    switch (type) {
        case snackbarTypes.info:
            return info;
        case snackbarTypes.success:
            return success;
        case snackbarTypes.error:
            return error;
    }

    return info;
};

export const Wrapper = styled('section')`
    ${getVariantStyles}
    z-index: ${theme.zIndexes.s};
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${theme.spacing.s12};
    max-width: 500px;
    width: 100%;
    position: fixed;
    bottom: ${theme.spacing.xxs2};
    left: 50%;
    transform: translateX(-50%);
    padding: ${theme.spacing.s12};
    background: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
`;

export const IconWrapper = styled('div')``;
export const TextWrapper = styled('div')`
    ${typography.text18}
`;

export const ErrorType = styled('strong')`
    font-family: ${theme.fontFamilies.bold};
`;
