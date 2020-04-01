import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
`;

export const LabelWrapper = styled('div')`
    ${typography.text18}
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacing.xs6};
`;

export const InputWrapper = styled('div')`
    margin-bottom: ${theme.spacing.xs6};
`;
export const ErrorWrapper = styled('div')`
    ${typography.text18}
    color: ${theme.colors.red};
`;
