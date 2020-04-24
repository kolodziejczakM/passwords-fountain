import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    position: fixed;
    z-index: ${theme.zIndexes.m};
    top: 76px;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    justify-items: center;
    grid-auto-flow: row;
    padding: ${theme.spacing.xl30} ${theme.spacing.m18};
    border: 1px solid ${theme.colors.primaryBlue};
    border-top: 4px solid ${theme.colors.primaryBlue};
    background: ${theme.colors.white};
`;

export const ContentWrapper = styled('div')`
    ${typography.text18}
    display: grid;
    max-width: 480px;
    width: 100%;
    padding: 0 ${theme.spacing.xs6} ${theme.spacing.xs6};
    margin-bottom: ${theme.spacing.m18};
    text-align: center;
`;

export const ControlsWrapper = styled('div')`
    display: grid;
    grid-gap: ${theme.spacing.xl30};
    grid-auto-flow: column;
`;
