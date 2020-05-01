import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, stylelint, typography } from '@/common/theme';
setPragma(h);

const standard = stylelint.css`
    border: 1px solid ${theme.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.primaryBlue} inset;
    }
`;

const withError = stylelint.css`
    border: 1px solid ${theme.colors.red};
    color: ${theme.colors.red};

    &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.red} inset;
    }
`;

export const Wrapper = styled('input')`
    ${typography.text18}
    padding: ${theme.spacing.s12};
    width: 100%;
    min-width: 240px;
    color: ${theme.colors.darkBlue};
    box-shadow: ${theme.shadows.clickableItem};
    outline: none;

    &:hover {
        text-decoration: underline;
    }

    ${({ hasError }: { hasError: boolean }): string =>
        hasError ? withError : standard}
`;
