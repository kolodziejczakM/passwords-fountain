import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, media, validate } from '../common/theme';

setPragma(h);

export const Wrapper = styled('section')`
    color: ${theme.colors.primaryBlue};

    ${media.gte(theme.breakpoints.s)(
        validate.css`
        color: ${theme.colors.pastelGreen};
    `
    )}
`;
