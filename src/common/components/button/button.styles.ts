import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('button')`
    ${typography.text18}
    padding: ${theme.spacing.m18} ${theme.spacing.xl30};
    min-width: 120px;
    display: inline-block;
    text-transform: uppercase;
    background: ${theme.colors.primaryBlue};
    color: ${theme.colors.white};
    box-shadow: ${theme.shadows.clickableItem};

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: none;
    }
    
    &:disabled {
        box-shadow: none;
        background: ${theme.colors.gray};
    }
    
    &:hover:enabled {
        cursor: pointer;
        text-decoration: underline;
    }
`;
