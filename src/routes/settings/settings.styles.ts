import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, media, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    display: grid;
    justify-items: center;
    padding-top: ${theme.spacing.s12};

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        padding-top: ${theme.spacing.xl40};
    `)}
`;

export const Header = styled('header')`
    display: grid;
    justify-items: center;
    margin-bottom: ${theme.spacing.xl30};

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        margin-bottom: ${theme.spacing.xl40};
    `)}
`;

export const Heading = styled('h2')`
    text-align: center;
    color: ${theme.colors.darkBlue};
    ${typography.text24}
`;

export const FormWrapper = styled('div')`
    max-width: ${theme.breakpoints.s480};
`;

export const FormControlWrapper = styled('div')`
    padding-bottom: ${theme.spacing.xl30};
`;

export const DescriptiveText = styled('span')`
    color: ${theme.colors.darkBlue};
    font-family: ${theme.fontFamilies.regular};
`;

export const LabelWrapper = styled('div')`
    color: ${theme.colors.darkBlue};
    font-family: ${theme.fontFamilies.bold};
`;

export const NoteLabelWrapper = styled(LabelWrapper)`
    font-family: ${theme.fontFamilies.regular};
    font-style: italic;
    padding-top: ${theme.spacing.m18};
`;

export const ControlsWrapper = styled('div')`
    display: grid;
    grid-auto-flow: column;
    grid-gap: ${theme.spacing.xl30};
    padding-top: ${theme.spacing.m18};
`;
