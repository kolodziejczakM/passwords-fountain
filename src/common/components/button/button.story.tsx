import { h, VNode } from 'preact';
import { Button } from './button.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Button',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    <Button
        onClick={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    >
        You can click me!
    </Button>
);

export const disabled = (): VNode => (
    <Button
        disabled
        onClick={() => {
            /* eslint-disable @typescript-eslint/no-empty-function */
        }}
    >
        You cannot click me
    </Button>
);
