import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '../../theme';
setPragma(h);

const standard = theme.css`
    border: 1px solid ${theme.colors.primaryBlue};

    &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.primaryBlue} inset;
    }
`;

const withErrors = `
    border: 1px solid ${theme.colors.red};
    color: ${theme.colors.red};

    &:focus {
        box-shadow: 0 0 0 2px ${theme.colors.red} inset;
    }
`;

export const Wrapper = styled('input')`
    padding: 18px;
    width: 360px;
    font-size: ${theme.fonts.s};
    line-height: 23px;
    color: ${theme.colors.darkBlue};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);
    outline: none;

    &:hover {
        text-decoration: underline;
    }

    ${({ hasErrors }: { hasErrors: boolean }): string =>
        hasErrors ? withErrors : standard}
`;
