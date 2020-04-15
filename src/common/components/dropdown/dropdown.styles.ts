import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
    min-width: 120px;
    max-width: 360px;
    text-transform: uppercase;

    &:focus {
        border: none;
        outline: none;
    }
`;

const optionCommon = stylelint.css`
    cursor: pointer;
    padding: ${theme.spacing.m18} ${theme.spacing.xl30};
`;

export const SelectedOptionWrapper = styled('div')`
    ${optionCommon}
    display: grid;
    grid-template-columns: 1fr auto;
    align-items: center;
    color: ${theme.colors.white};
    font-size: ${theme.fontSizes.s18};
    background: ${theme.colors.primaryBlue};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const OptionListWrapper = styled('div')``;

export const OptionList = styled('ul')`
    border: 1px solid ${theme.colors.primaryBlue};
`;

export const Option = styled('li')`
    ${optionCommon}
    color: ${theme.colors.darkBlue};

    &:hover {
        cursor: pointer;
        text-decoration: underline;
        background: ${theme.colors.pastelGreen};
    }
`;

export const ExpansionIcon = styled('span')`
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid ${theme.colors.white};
`;
