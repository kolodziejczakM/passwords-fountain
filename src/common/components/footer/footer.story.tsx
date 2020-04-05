import { h, VNode } from 'preact';
import { Footer } from './footer.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Footer',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <Footer />;
