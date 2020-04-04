enum colors {
    primaryBlue = '#2484ad',
    pastelBlue = '#b0d3f0',
    blue = '#48a3ca',
    darkBlue = '#004973',
    primaryGreen = '#46b29d',
    pastelGreen = '#d1f5ea',
    white = '#fff',
    red = '#ff6465',
    gray = '#c0c0c0',
}

enum fontSizes {
    xs16 = '16px',
    s18 = '18px',
    m20 = '20px',
    l24 = '24px',
    xl32 = '32px',
}

enum fontFamilies {
    regular = 'PT Sans',
    bold = 'PT Sans Bold',
}

export enum breakpoints {
    xs320 = '320px',
    s375 = '375px',
    s480 = '480px',
    m880 = '880px',
}

enum spacing {
    xxs2 = '2px',
    xs6 = '6px',
    s12 = '12px',
    m18 = '18px',
    l24 = '24px',
    xl30 = '30px',
    xl40 = '40px',
    xxl60 = '60px',
}

enum lineHeights {
    xs21 = '21px',
    s23 = '23px',
    m26 = '26px',
    l31 = '31px',
    xl41 = '41px',
}

enum shadows {
    clickableItem = `0 2px 2px 0 rgba(0, 0, 0, 0.2)`,
}

export const stylelint = {
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
    lineHeights,
    fontFamilies,
    spacing,
    shadows,
} as const;

const text16 = stylelint.css`
    font-size: ${theme.fontSizes.xs16};
    line-height: ${theme.lineHeights.xs21};
`;

const text18 = stylelint.css`
    font-size: ${theme.fontSizes.s18};
    line-height: ${theme.lineHeights.s23};
`;

const text20 = stylelint.css`
    font-size: ${theme.fontSizes.m20};
    line-height: ${theme.lineHeights.m26};
`;

const text24 = stylelint.css`
    font-size: ${theme.fontSizes.l24};
    line-height: ${theme.lineHeights.l31};
`;

const text32 = stylelint.css`
    font-size: ${theme.fontSizes.xl32};
    line-height: ${theme.lineHeights.xl41};
`;

export const typography = {
    text16,
    text18,
    text20,
    text24,
    text32,
} as const;
