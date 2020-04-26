import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { media, stylelint, theme, typography } from '@/common/theme';
setPragma(h);

export const PasswordEntityWrapper = styled('div')`
    margin-bottom: ${theme.spacing.s12};
`;

export const Wrapper = styled('section')`
    padding-top: 100px;

    ${PasswordEntityWrapper}:last-of-type {
        margin-bottom: 0;
    }
`;

export const OptionsPanelWrapper = styled('div')`
    display: grid;
    justify-items: center;
    margin-bottom: ${theme.spacing.s12};
`;

export const Placeholder = styled('div')`
    display: grid;
    place-items: center;
    padding: 120px 0 0 0;

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        padding: 170px 0 0 0;
    `)}
`;

export const PlaceholderTextWrapper = styled('div')`
    ${typography.text24}
    text-align: center;
    color: ${theme.colors.darkBlue};
    padding: ${theme.spacing.l24} 0;
`;

export const IconSizer = styled('div')`
    margin: 0 auto;

    img {
        width: 150px;
        height: 150px;
    }

    ${media.gte(theme.breakpoints.s480)(stylelint.css`
        img {
            width: 200px;
            height: 200px;
        }
    `)}
`;
