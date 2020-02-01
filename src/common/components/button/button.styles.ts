import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '../../theme';
setPragma(h);

export const Wrapper = styled('button')`
    cursor: pointer;
    min-width: 140px;
    padding: 18px 30px;
    display: inline-block;
    text-transform: uppercase;
    background: ${theme.colors.primaryBlue};
    font-size: ${theme.fonts.s};
    line-height: 23px;
    color: ${theme.colors.white};
    box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.2);

    &:hover {
        text-decoration: underline;
    }

    &:focus {
        border: none;
        outline: none;
    }

    &:active {
        box-shadow: none;
    }
`;
