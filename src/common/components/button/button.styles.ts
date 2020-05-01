import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, media, stylelint } from '@/common/theme';
setPragma(h);

// Due to bugs, (button shouldn't be displayed both grid & flex)
// More: https://github.com/rachelandrew/gridbugs#10-some-html-elements-cant-be-grid-containers
// https://github.com/philipwalton/flexbugs#flexbug-9
export const Wrapper = styled('button')`
    ${typography.text14}
    padding: ${theme.spacing.s12};
    min-width: 100px;
    max-width: 360px;
    text-transform: uppercase;
    background: ${theme.colors.primaryBlue};
    box-shadow: ${theme.shadows.clickableItem};

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: none;
    }

    &:disabled {
        box-shadow: none;
        background: ${theme.colors.gray};
    }

    &:hover:enabled {
        cursor: pointer;

        * {
            text-decoration: underline;
        }
    }

    ${media.gte(theme.breakpoints.s375)(stylelint.css`
        ${typography.text16}
        padding: ${theme.spacing.s12} ${theme.spacing.m18};
    `)}

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text18}
        padding: ${theme.spacing.s12} ${theme.spacing.xl30};
    `)}
`;

export const GridWrapper = styled('span')`
    display: grid;
    place-items: center;
    color: ${theme.colors.white};
    white-space: nowrap;
`;
