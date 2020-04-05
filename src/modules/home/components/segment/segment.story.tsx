import { h, VNode } from 'preact';
import { Segment } from './segment.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'Segment',
    decorators: [withA11y],
};

export const defaultView = (): VNode => (
    <Segment title="Title test">
        <div>Test content</div>
    </Segment>
);
