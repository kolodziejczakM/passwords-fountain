import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { media, stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('footer')`
    display: grid;
    grid-template-areas:
        'socialLinks'
        'copyright';

    align-items: center;
    justify-content: center;
    grid-column-gap: ${theme.spacing.m18};
    grid-row-gap: ${theme.spacing.xs6};
    padding: ${theme.spacing.s12} 0;
    color: ${theme.colors.darkBlue};
    text-align: center;

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text18}
        grid-template-areas: 'copyright socialLinks';
    `)}
`;

export const CopyrightTextWrapper = styled('div')`
    grid-area: copyright;
`;

export const SocialLink = styled('a')``;

export const SocialLinksWrapper = styled('div')`
    display: grid;
    grid-area: socialLinks;
    justify-content: center;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    grid-column-gap: ${theme.spacing.m18};
`;
