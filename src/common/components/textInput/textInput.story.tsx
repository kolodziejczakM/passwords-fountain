import { h, VNode } from 'preact';
import { TextInput } from './textInput.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'TextInput',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    <TextInput
        onInput={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    />
);

export const hasValue = (): VNode => (
    <TextInput
        value="Hello there!"
        onInput={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    />
);

export const hasPlaceholder = (): VNode => (
    <TextInput
        placeholder="e.g. Tomato"
        onInput={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    />
);

export const hasError = (): VNode => (
    <TextInput
        hasError
        onInput={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    />
);

export const typePassword = (): VNode => (
    <TextInput
        type="password"
        onInput={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    />
);
