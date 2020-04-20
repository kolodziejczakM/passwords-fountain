import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
setPragma(h);

export const PasswordEntityWrapper = styled('div')`
    margin-bottom: ${theme.spacing.s12};
`;

export const Wrapper = styled('section')`
    ${PasswordEntityWrapper}:last-of-type {
        margin-bottom: 0;
    }
`;

export const OptionsPanelWrapper = styled('div')`
    display: grid;
    justify-items: center;
    margin-bottom: ${theme.spacing.s12};
`;
