import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const Row = styled('div')`
    margin-bottom: ${theme.spacing.m18};
`;

const selectedOutline = stylelint.css`
    outline: ${theme.spacing.xxs2} solid ${theme.colors.significantGreen};
`;

export const Wrapper = styled('button')`
    width: 100%;
    background: ${theme.colors.pastelGreen};
    padding: ${theme.spacing.m18};
    ${({ isSelected }: { isSelected: boolean }) =>
        isSelected ? selectedOutline : 'outline: none;'}

    ${Row}:last-of-type {
        margin-bottom: 0;
    }

    &:hover {
        cursor: pointer;

        & > span {
            text-decoration: underline;
        }
    }
`;

export const GridWrapper = styled('span')`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
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

export const DataWrapper = styled('div')`
    display: grid;
    text-align: left;
`;

export const ControlsWrapper = styled('div')`
    display: grid;
    align-content: space-between;
`;

export const FormControlWrapper = styled('div')`
    text-align: left;
`;
