import { h, VNode } from 'preact';
import { StartGuide } from './startGuide.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'StartGuide',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <StartGuide />;
