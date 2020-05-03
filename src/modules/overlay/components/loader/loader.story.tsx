import { h, VNode } from 'preact';
import { Loader } from './loader.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Loader',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <Loader />;
