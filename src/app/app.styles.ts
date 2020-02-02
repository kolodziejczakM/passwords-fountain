import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, media, stylelint } from '../common/theme';

setPragma(h);

export const Wrapper = styled('section')`
    color: ${theme.colors.primaryBlue};

    ${media.gte(theme.breakpoints.s)(
        stylelint.css`
        color: ${theme.colors.pastelGreen};
    `
    )}
`;
