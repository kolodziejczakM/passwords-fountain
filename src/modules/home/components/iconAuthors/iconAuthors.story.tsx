import { h, VNode } from 'preact';
import { IconAuthors } from './iconAuthors.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'IconAuthors',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <IconAuthors />;
