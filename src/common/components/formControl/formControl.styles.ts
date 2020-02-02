import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '../../theme';
setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
`;

export const LabelWrapper = styled('div')`
    ${typography.smallText}
    color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacing.s};
`;

export const InputWrapper = styled('div')`
    margin-bottom: ${theme.spacing.s};
`;
export const ErrorWrapper = styled('div')`
    ${typography.smallText}
    color: ${theme.colors.red};
`;
