import { h, VNode } from 'preact';
import { Banner } from './banner.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Banner',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <Banner />;
