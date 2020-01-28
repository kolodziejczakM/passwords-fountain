import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '../shared/theme';

setPragma(h);

export const Wrapper = styled('section')`
    color: ${theme.colors.primaryBlue};

    ${theme.media.gte(theme.breakpoints.s)(
        theme.css`
        color: ${theme.colors.pastelGreen};
    `
    )}
`;
