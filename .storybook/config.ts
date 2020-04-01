import { configure, addParameters } from '@storybook/preact';
import '../src/globalStyles';
import { breakpoints } from '../src/common/theme';

const viewports = {
    iPhoneSE: {
        name: 'iPhone SE',
        styles: {
            width: '320px',
            height: '568px',
        },
    },
    iphone678: {
        name: 'iPhone 6/7/8',
        styles: {
            width: '375px',
            height: '667px',
        },
    },
    iphone11: {
        name: 'iPhone 11',
        styles: {
            width: '414px',
            height: '896px',
        },
    },
    nexus5X: {
        name: 'Nexus 5X',
        styles: {
            width: '412px',
            height: '732px',
        },
    },
    huaweiP20Pro: {
        name: 'Huawei P20 Pro',
        styles: {
            width: '360px',
            height: '747px',
        },
    },
    tabletQuery: {
        name: 'Tablet (mediaQuery)',
        styles: {
            width: breakpoints.m880,
            height: '1280px',
        },
    },
    desktopFHD: {
        name: 'Desktop FHD',
        styles: {
            width: '1920px',
            height: '1080px',
        },
    },
    desktop4K: {
        name: 'Desktop 4k UHD',
        styles: {
            width: '3840px',
            height: '2160px',
        },
    },
};

addParameters({
    viewport: { viewports },
});

configure(require.context('../src', true, /\.story\.tsx$/), module);
