import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, media, stylelint, typography } from '@/common/theme';
setPragma(h);

export const GuideStep = styled('div')`
    color: ${theme.colors.darkBlue};
    ${typography.text16}
    margin-bottom: ${theme.spacing.m18};

    span {
        color: ${theme.colors.darkBlue};
    }

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        ${typography.text18}
        margin-bottom: ${theme.spacing.xl30};
    `)}
    
    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        ${typography.text20}
    `)}
`;

export const Wrapper = styled('section')`
    border-radius: 25px;
    padding: ${theme.spacing.m18};
    background: ${theme.colors.pastelBlue};

    ${GuideStep}:last-of-type {
        margin-bottom: 0;
    }

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        padding: ${theme.spacing.xl30};
    `)}
`;
