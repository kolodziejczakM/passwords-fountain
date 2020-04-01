import { h, VNode } from 'preact';
import { OptionsPanel } from './optionsPanel.component';
import { withA11y } from '@storybook/addon-a11y';

export default {
    title: 'OptionsPanel',
    decorators: [withA11y],
};

export const defaultView = (): VNode => <OptionsPanel />;

export const decodeExpanded = (): VNode => (
    <OptionsPanel defaultVariantName="decodeExpanded" />
);
