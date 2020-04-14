import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    position: fixed;
    top: 100px;
    left: 50%;
    transform: translateX(-50%);
    display: grid;
    width: 100%;
    min-width: 320px;
    max-width: 640px;
    justify-items: center;
    grid-auto-flow: row;
    padding: ${theme.spacing.m18};
    border: 1px solid ${theme.colors.primaryBlue};
    border-top: 4px solid ${theme.colors.primaryBlue};
    background: ${theme.colors.white};
`;

export const MessageTextWrapper = styled('div')`
    ${typography.text18}
    padding: ${theme.spacing.xs6};
    margin-bottom: ${theme.spacing.m18};
    text-align: center;
`;

export const ControlsWrapper = styled('div')`
    display: grid;
    grid-gap: ${theme.spacing.xl30};
    grid-auto-flow: column;
`;
