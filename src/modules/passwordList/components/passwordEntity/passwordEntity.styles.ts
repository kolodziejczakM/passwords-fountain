import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '@/common/theme';
setPragma(h);

export const Row = styled('div')`
    margin-bottom: ${theme.spacing.m18};
`;

export const Wrapper = styled('section')`
    background: ${theme.colors.pastelGreen};
    padding: ${theme.spacing.m18};

    ${Row}:last-of-type {
        margin-bottom: 0;
    }
`;
export const Label = styled('span')`
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.darkBlue};
    ${typography.text18}
`;

export const Value = styled('strong')`
    color: ${theme.colors.darkBlue};
    word-break: break-all;
    ${typography.text18}
`;
