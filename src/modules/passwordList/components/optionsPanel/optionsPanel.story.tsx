import { h, VNode } from 'preact';
import { OptionsPanel } from './optionsPanel.component';
import { withA11y } from '@storybook/addon-a11y';
import { withStoreMock } from '../../../../../.storybook/helpers';

export default {
    title: 'OptionsPanel',
    decorators: [withA11y],
};

const getState = (variant: string) => ({
    passwordList: {
        currentOptionPanelVariantName: variant,
        selectedAndDecryptedEntity: {},
    },
});

export const defaultView = (): VNode =>
    withStoreMock(() => <OptionsPanel />, getState('connectCollapsed'));

export const connectExpanded = (): VNode =>
    withStoreMock(() => <OptionsPanel />, getState('connectExpanded'));

export const entityFormCollapsed = (): VNode =>
    withStoreMock(() => <OptionsPanel />, getState('entityFormCollapsed'));

export const entityFormExpanded = (): VNode =>
    withStoreMock(() => <OptionsPanel />, getState('entityFormExpanded'));
