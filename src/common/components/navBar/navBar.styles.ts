import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, media, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('nav')`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-areas:
        'logo . appLink'
        'links links links';

    ${media.gte(theme.breakpoints.m920)(stylelint.css`
        grid-template-areas: 'logo links appLink';
    `)}
`;

export const LogoWrapper = styled('div')`
    grid-area: logo;
    display: flex;
`;

export const LogoAnchor = styled('a')`
    text-decoration: none;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: ${theme.spacing.s12};
    align-items: center;
    padding: ${theme.spacing.m18} 0;
`;

export const AppName = styled('h1')``;

export const AppLinkWrapper = styled('div')`
    grid-area: appLink;
    padding: ${theme.spacing.m18} 0;
    display: grid;
    place-items: center;
`;

const PrimaryText = stylelint.css`
    font-family: ${theme.fontFamilies.bold};
    
    ${media.gte(theme.breakpoints.s375)(stylelint.css`
        ${typography.text24}
    `)}
    
    ${typography.text20}
`;

export const AppLinkAnchor = styled('a')`
    display: flex;
    align-items: center;
    text-decoration: none;
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.darkBlue};

    &:hover {
        text-decoration: underline;
    }

    ${PrimaryText}
`;

export const Green = styled('span')`
    color: ${theme.colors.primaryGreen};
    margin-right: ${theme.spacing.xs6};
    ${PrimaryText}
`;

export const Blue = styled('span')`
    color: ${theme.colors.primaryBlue};
    ${PrimaryText}
`;

const LinksPadding = `${theme.spacing.m18} 0 ${theme.spacing.m18}`;
export const LinksWrapper = styled('div')`
    grid-area: links;
    display: grid;
    grid-auto-flow: column;
    justify-items: center;
    align-items: center;
    padding: ${({ withoutPadding }: { withoutPadding: boolean }) =>
        withoutPadding ? 0 : LinksPadding};

    ${media.gte(theme.breakpoints.m920)(stylelint.css`
        justify-content: flex-end;
    `)}
`;

export const LinkAnchor = styled('a')`
    color: ${theme.colors.darkBlue};
    text-decoration: none;

    &:hover {
        text-decoration: underline;
    }

    ${media.gte(theme.breakpoints.s375)(stylelint.css`
        ${typography.text20}
    `)}
    
    ${media.gte(theme.breakpoints.m700)(stylelint.css`
        ${typography.text24}
    `)}
    
    ${media.gte(theme.breakpoints.m920)(stylelint.css`
        margin-right: ${theme.spacing.xxl60};
    `)}
     
    ${typography.text18}
`;
