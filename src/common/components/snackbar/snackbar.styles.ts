import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, stylelint } from '../../theme';
import { snackbarTypes } from '../../../modules/overlay/overlay.constants';
setPragma(h);

const info = stylelint.css`
    border-top: 4px solid ${theme.colors.primaryBlue};
`;

const success = stylelint.css`
    border-top: 4px solid ${theme.colors.primaryGreen};
`;

const error = stylelint.css`
    border-top: 4px solid ${theme.colors.red};
`;

const getVariantStyles = ({ type }: { type: string }): string => {
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
    max-width: 500px;
    width: 100%;
    position: absolute;
    bottom: 2px;
    left: 50%;
    transform: translateX(-50%);
    ${typography.smallText}
    padding: ${theme.spacing.m} ${theme.spacing.xm};
    background: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
`;
