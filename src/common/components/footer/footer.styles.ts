import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { media, stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('footer')`
    padding: ${theme.spacing.s12} 0;
    color: ${theme.colors.darkBlue};
    text-align: center;

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text18}
    `)}
`;
