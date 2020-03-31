import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    background: ${theme.colors.white};
    padding: ${theme.spacing.m18};
`;

export const ContentWrapper = styled('div')``;
