import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, media, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    height: 100%;
    padding: 0 ${theme.spacing.m18};

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        padding: 0 ${theme.spacing.xl30};
    `)}
`;

export const PageWrapper = styled('main')`
    padding-top: ${theme.spacing.xl30};
`;
