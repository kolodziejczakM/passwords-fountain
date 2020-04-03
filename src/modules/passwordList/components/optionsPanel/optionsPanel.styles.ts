import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    max-width: ${theme.breakpoints.s480};
    background: ${theme.colors.white};
    padding: ${theme.spacing.m18};
    box-shadow: ${theme.shadows.clickableItem};
`;

export const ContentWrapper = styled('div')``;

export const Content = styled('div')`
    padding-bottom: ${theme.spacing.m18};
`;

export const ButtonWrapper = styled('div')`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${theme.spacing.xl30};
`;
