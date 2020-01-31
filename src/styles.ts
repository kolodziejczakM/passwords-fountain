import { h } from 'preact';
import { setPragma, glob } from 'goober';
import PTSansRegularWoff2 from './static/fonts/pt-sans-v11-latin_latin-ext-regular.woff2';
import PTSansRegularWoff from './static/fonts/pt-sans-v11-latin_latin-ext-regular.woff';
import PTSansBoldWoff2 from './static/fonts/pt-sans-v11-latin_latin-ext-700.woff2';
import PTSansBoldWoff from './static/fonts/pt-sans-v11-latin_latin-ext-700.woff';

setPragma(h);

const fontFaces = `
    @font-face {
        font-family: 'PT Sans';
        font-style: normal;
        font-weight: 400;
        src: local('PT Sans'),
            local('PTSans-Regular'),
            url(${PTSansRegularWoff2}) format('woff2'),
            url(${PTSansRegularWoff}) format('woff');
    }

    @font-face {
        font-family: 'PT Sans Bold';
        font-style: bold;
        font-weight: 700;
        src: local('PT Sans Bold'),
            local('PTSans-Bold'),
                url(${PTSansBoldWoff2}) format('woff2'),
                url(${PTSansBoldWoff}) format('woff');
    }
`;

const resetCss = `
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video, button {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        font-family: 'PT Sans';
    }
    /* HTML5 display-role reset for older browsers */

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    
    body {
        line-height: 1;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
`;

if (!document.getElementById('_fonts')) {
    const s = document.createElement('style');
    s.id = '_fonts';
    s.appendChild(document.createTextNode(`${fontFaces}`));
    document.head.appendChild(s);
}

if (!document.getElementById('_goober')) {
    glob`${resetCss}
  `;
}
