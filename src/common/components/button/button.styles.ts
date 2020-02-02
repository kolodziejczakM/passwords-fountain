import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '../../theme';
setPragma(h);

export const Wrapper = styled('button')`
    ${typography.smallText}
    padding: ${theme.spacing.l} ${theme.spacing.xxl};
    min-width: 140px;
    cursor: pointer;
    display: inline-block;
    text-transform: uppercase;
    background: ${theme.colors.primaryBlue};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.clickableItem};

    &:hover {
        text-decoration: underline;
    }

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: none;
    }
`;
