const colors = {
    primaryBlue: '#2484ad',
    pastelBlue: '#b0d3f0',
    blue: '#48a3ca',
    darkBlue: '#004973',
    primaryGreen: '#46b29d',
    pastelGreen: '#d1f5ea',
    white: '#fff',
    red: '#ff6465',
} as const;

const fontSizes = {
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '32px',
} as const;

const fontFamilies = {
    regular: 'PT Sans',
    bold: 'PT Sans Bold',
} as const;

// TODO: Review
const breakpoints = {
    xs: '320px',
    s: '480px',
    m: '768px',
    l: '1024px',
    xl: '1980px',
} as const;

const spacing = {
    s: '6px',
    l: '18px',
    xxl: '30px',
} as const;

const shadows = {
    clickableItem: `0 2px 2px 0 rgba(0, 0, 0, 0.2)`,
} as const;

export const validate = {
    css: (strings: TemplateStringsArray, ...values: any[]): string =>
        strings.reduce(
            (acc: string, value: string, i: number) =>
                (acc += value + (values[i] || '')),
            ''
        ),
} as const;

export const media = {
    gte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (min-width: ${breakpoint}) {
        ${styles}
    }
`,
    lte: (breakpoint: string) => (styles: string): string => `
    @media only screen and (max-width: ${breakpoint}) {
        ${styles}
    }
`,
} as const;

export const theme = {
    colors,
    breakpoints,
    fontSizes,
    fontFamilies,
    spacing,
    shadows,
} as const;

const smallText = validate.css`
    font-size: ${theme.fontSizes.s};
    line-height: 23px;
`;

export const typography = {
    smallText,
} as const;
