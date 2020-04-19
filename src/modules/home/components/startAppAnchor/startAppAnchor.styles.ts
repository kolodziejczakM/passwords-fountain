import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
import { Link } from 'preact-router/match';
setPragma(h);

export const Wrapper = styled(Link)`
    ${typography.text32}
    display: inline-grid;
    grid-auto-flow: column;
    place-items: center;
    grid-gap: ${theme.spacing.m18};
    color: ${theme.colors.primaryGreen};
    text-transform: uppercase;
    text-decoration: none;
    position: relative;

    &:hover {
        text-decoration: underline;
    }
`;
