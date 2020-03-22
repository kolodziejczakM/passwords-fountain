import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '../../theme';
setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
`;

export const LabelWrapper = styled('div')`
    ${typography.text18}
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
