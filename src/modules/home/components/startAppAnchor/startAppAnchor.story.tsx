import { h, VNode } from 'preact';
import { StartAppAnchor } from './startAppAnchor.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'StartAppAnchor',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <StartAppAnchor />;
