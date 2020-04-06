import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { media, stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')``;

export const Heading = styled('h4')`
    color: ${theme.colors.darkBlue};
    ${typography.text18}
    margin-bottom: ${theme.spacing.s12};

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text24}
        margin-bottom: ${theme.spacing.m18};
    `)}
`;

export const IconAuthorList = styled('ul')``;

export const IconInfo = styled('li')`
    color: ${theme.colors.darkBlue};
    ${typography.text16}

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text20}
    `)}
`;
