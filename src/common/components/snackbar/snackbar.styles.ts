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
    ${typography.text18}
    max-width: 500px;
    width: 100%;
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    padding: ${theme.spacing.s12};
    background: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
`;
