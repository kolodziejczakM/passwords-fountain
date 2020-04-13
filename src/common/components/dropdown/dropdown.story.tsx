import { h, VNode } from 'preact';
import { Dropdown } from './dropdown.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Dropdown',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <Dropdown />;
