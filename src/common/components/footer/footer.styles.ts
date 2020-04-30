import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { media, stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('footer')`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: max-content;
    align-items: center;
    justify-content: center;
    grid-column-gap: ${theme.spacing.m18};
    padding: ${theme.spacing.s12} 0;
    color: ${theme.colors.darkBlue};
    text-align: center;

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text18}
    `)}
`;
export const SocialLink = styled('a')``;
