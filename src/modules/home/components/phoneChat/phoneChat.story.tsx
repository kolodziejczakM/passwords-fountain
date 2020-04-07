import { h, VNode } from 'preact';
import { PhoneChat } from './phoneChat.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'PhoneChat',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <PhoneChat />;
