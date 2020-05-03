import { h, VNode } from 'preact';
import { Banner } from './banner.component';
import { withA11y } from '@storybook/addon-a11y';
import { withStoreMock } from '../../../../../.storybook/helpers';

export default {
    title: 'Banner',
    decorators: [withA11y],
};

const state = {};

export const defaultView = (): VNode => withStoreMock(() => <Banner />, state);
