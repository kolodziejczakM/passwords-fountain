import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { media, stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    text-align: center;

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        padding: 0 ${theme.spacing.xl40} ${theme.spacing.xl40} ${theme.spacing.xl40};
    `)}
`;

export const TagLineWrapper = styled('div')`
    margin-bottom: ${theme.spacing.m18};

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        margin-bottom: ${theme.spacing.xl40};
    `)}
`;

export const TagLine = styled('h2')`
    color: ${theme.colors.darkBlue};
    font-family: ${theme.fontFamilies.bold};

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text24}
    `)}
    
    ${media.gte(theme.breakpoints.m700)(stylelint.css`
        ${typography.text32}
    `)}

    ${typography.text20}
`;

export const Green = styled('span')`
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.primaryGreen};
    margin-right: ${theme.spacing.xs6};
`;

export const Blue = styled('span')`
    font-family: ${theme.fontFamilies.bold};
    color: ${theme.colors.primaryBlue};
`;

export const IconSizer = styled('div')`
    margin: 0 auto;

    img {
        width: 150px;
        height: 150px;
    }

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        img {
            width: 280px;
            height: 280px;
        }
    `)}
`;

export const StartAppAnchorWrapper = styled('div')`
    padding: ${theme.spacing.xl30} 0;
`;
