import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, media, stylelint, negative } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')``;

export const TitleBar = styled('div')`
    width: calc(100% + (2 * ${theme.spacing.m18}));
    margin-left: ${negative(theme.spacing.m18)};
    padding: ${theme.spacing.s12} ${theme.spacing.m18};
    background: ${theme.colors.blue};

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        width: calc(100% + ${theme.spacing.xxl60});
        margin-left: ${negative(theme.spacing.xl30)};
        padding: ${theme.spacing.m18} ${theme.spacing.xxl60};
    `)}
`;

export const Title = styled('h3')`
    color: ${theme.colors.white};
    font-family: ${theme.fontFamilies.bold};
    ${typography.text20}

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text24}
    `)}
`;

export const ContentWrapper = styled('div')`
    padding: ${theme.spacing.m18} 0;
    ${typography.text18}

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        padding: ${theme.spacing.xl40} ${theme.spacing.xl30};
        ${typography.text24}
    `)}
`;
