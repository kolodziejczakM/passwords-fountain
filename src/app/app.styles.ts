import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, media, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    min-height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
    padding: 0 ${theme.spacing.m18};

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        padding: 0 ${theme.spacing.xl30};
    `)}
`;

export const Header = styled('header')``;

export const PageWrapper = styled('main')`
    padding: 0 0 ${theme.spacing.xl30} 0;
`;

export const LoaderWrapper = styled('div')`
    position: fixed;
    bottom: ${theme.spacing.xl30};
    left: 50%;
    transform: translateX(-50%);
`;
