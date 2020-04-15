import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
import {
    Wrapper as Dropdown,
    SelectedOptionWrapper,
    OptionsWrapper,
} from '@/common/components/dropdown/dropdown.styles';

setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
    place-items: center;

    ${Dropdown} {
        min-width: initial;
        display: inline-grid;
    }

    ${SelectedOptionWrapper} {
        justify-items: end;
        padding: 0;
        background: transparent;
    }

    ${OptionsWrapper} {
        width: auto;
        right: ${theme.spacing.xs6};
        top: calc(100% + ${theme.spacing.xs6});
    }
`;
