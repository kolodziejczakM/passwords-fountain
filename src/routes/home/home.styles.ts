import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, media, stylelint, typography } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')``;

export const Paragraph = styled('p')`
    color: ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacing.xs6};

    span {
        color: ${theme.colors.darkBlue};
    }
`;

export const AuthorContactWrapper = styled('div')`
    margin-bottom: ${theme.spacing.xl40};
`;

export const AuthorContact = styled('span')`
    font-family: ${theme.fontFamilies.bold};
`;

export const AuthorsWrapper = styled('div')`
    justify-self: start;
`;

export const InnerWrapper = styled('div')`
    display: grid;
    place-items: start;
    grid-template-columns: 1fr;

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        place-items: center;
        grid-template-columns: 2fr 1fr;  
    `)}

    ${media.gte(theme.breakpoints.m1100)(stylelint.css`
        grid-template-columns: 1fr 1fr;  
    `)}
`;

export const IconWrapper = styled('div')`
    display: none;

    ${media.gte(theme.breakpoints.m880)(stylelint.css`
        display: block;
        
        img {
            width: 200px;
            height: 200px;
        }
    `)}

    ${media.gte(theme.breakpoints.m1100)(stylelint.css` 
        img {
            width: 250px;
            height: 250px;
        }
    `)}
`;

export const ParagraphsWrapper = styled('div')`
    margin-bottom: ${theme.spacing.m18};
`;
