import { h, VNode } from 'preact';
import { Snackbar } from './snackbar.component';
import { withA11y } from '@storybook/addon-a11y';
import { withStoreMock } from '../../../../../.storybook/helpers';

export default {
    title: 'Snackbar',
    decorators: [withA11y],
};

const successData = {
    id: 0,
    messageKey: 'passwords fetched correctly!',
    type: 'success',
};

const infoData = {
    id: 0,
    messageKey: 'You are offline.',
    type: 'info',
};

const errorData = {
    id: 0,
    messageKey: 'cannot connect to your database.',
    type: 'error',
};

const getState = (snackbarPayload: any) => ({
    overlay: {
        snackbarMessages: [snackbarPayload],
    },
});

export const defaultView = (): VNode =>
    withStoreMock(() => <Snackbar />, getState(infoData));

export const success = (): VNode =>
    withStoreMock(() => <Snackbar />, getState(successData));

export const error = (): VNode =>
    withStoreMock(() => <Snackbar />, getState(errorData));
