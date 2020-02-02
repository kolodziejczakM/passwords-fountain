import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, validate, typography } from '../../theme';
setPragma(h);

const standard = validate.css`
    border: 1px solid ${theme.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.primaryBlue} inset;
    }
`;

const withErrors = validate.css`
    border: 1px solid ${theme.colors.red};
    color: ${theme.colors.red};

    &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.red} inset;
    }
`;

export const Wrapper = styled('input')`
    ${typography.smallText}
    padding: ${theme.spacing.l};
    width: 360px;
    color: ${theme.colors.darkBlue};
    box-shadow: ${theme.shadows.clickableItem};
    outline: none;

    &:hover {
        text-decoration: underline;
    }

    ${({ hasErrors }: { hasErrors: boolean }): string =>
        hasErrors ? withErrors : standard}
`;
