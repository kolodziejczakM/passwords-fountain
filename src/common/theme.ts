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

const fonts = {
    xs: '16px',
    s: '18px',
    m: '20px',
    l: '24px',
    xl: '32px',
} as const;

// TODO: Review
const breakpoints = {
    xs: '320px',
    s: '480px',
    m: '768px',
    l: '1024px',
    xl: '1980px',
} as const;

type ColorKey = keyof typeof colors;
type ColorValue = typeof colors[ColorKey];

type FontKey = keyof typeof fonts;
type FontValue = typeof fonts[FontKey];

type BreakpointsKey = keyof typeof breakpoints;
type BreakpointValue = typeof breakpoints[BreakpointsKey];

interface Theme {
    colors: Record<ColorKey, ColorValue>;
    breakpoints: Record<BreakpointsKey, BreakpointValue>;
    fonts: Record<FontKey, FontValue>;
    media: {
        gte: (breakpoint: string) => (styles: string) => string;
        lte: (breakpoint: string) => (styles: string) => string;
    };
    css: (strings: TemplateStringsArray, ...values: any[]) => string;
}

const cssTemplateJoin = (
    strings: TemplateStringsArray,
    ...values: any[]
): string =>
    strings.reduce(
        (acc: string, value: string, i: number) =>
            (acc += value + (values[i] || '')),
        ''
    );

export const theme: Theme = {
    colors,
    breakpoints,
    fonts,
    media: {
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
    },
    css: cssTemplateJoin,
} as const;
