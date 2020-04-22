import { h, VNode } from 'preact';
import { IconButton } from './iconButton.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'IconButton',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    <IconButton onClick={(): void => {}} iconName="bin" />
);
