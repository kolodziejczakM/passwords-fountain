import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
    grid-template-columns: auto 1fr;
`;
``;
export const LogoWrapper = styled('div')`
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${theme.spacing.s12};
    align-items: center;
`;

export const AppName = styled('h1')``;

export const Green = styled('span')`
    ${typography.text24}
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.primaryGreen};
    margin-right: ${theme.spacing.xs6};
`;

export const Blue = styled('span')`
    ${typography.text24}
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.primaryBlue};
`;

export const LinksWrapper = styled('div')`
    display: grid;
    grid-auto-flow: column;
    justify-content: flex-end;
    padding: ${theme.spacing.m18} ${theme.spacing.s12};
`;

// TODO: desktop - text24, mobile - text20
export const LinkAnchor = styled('a')`
    ${typography.text24}
    color: ${theme.colors.darkBlue};
    text-decoration: none;
    margin-right: ${theme.spacing.xxl60};
`;
