import { h, VNode } from 'preact';
import { StartAppAnchor } from './startAppAnchor.component';
import { withA11y } from '@storybook/addon-a11y';
import { withStoreMock } from '../../../../../.storybook/helpers';

export default {
    title: 'StartAppAnchor',
    decorators: [withA11y],
};

const state = {};

export const defaultView = (): VNode =>
    withStoreMock(() => <StartAppAnchor />, state);
