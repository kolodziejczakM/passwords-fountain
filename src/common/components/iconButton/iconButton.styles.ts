import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
import { Wrapper as Button } from '@/common/components/button/button.styles';
setPragma(h);

export const Wrapper = styled(Button)`
    padding: ${theme.spacing.xs6};
    min-width: initial;
`;
