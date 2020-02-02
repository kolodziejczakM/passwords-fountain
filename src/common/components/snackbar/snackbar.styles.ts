import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography } from '../../theme';
setPragma(h);

export const Wrapper = styled('section')`
    ${typography.smallText}
    padding: ${theme.spacing.l} ${theme.spacing.xxl};
    width: 360px;
    background: ${theme.colors.white};
`;
