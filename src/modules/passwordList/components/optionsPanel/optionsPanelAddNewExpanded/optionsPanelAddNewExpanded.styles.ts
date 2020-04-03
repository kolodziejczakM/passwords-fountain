import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')``;

export const FormControlWrapper = styled('div')`
    padding-bottom: ${theme.spacing.m18};
`;
