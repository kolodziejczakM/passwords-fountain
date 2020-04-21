import { h, VNode } from 'preact';
import { OptionsPanel } from './optionsPanel.component';
import { withA11y } from '@storybook/addon-a11y';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

export default {
    title: 'OptionsPanel',
    decorators: [withA11y],
};
const storeMock = (variant: any): any =>
    createStore({
        passwordList: {
            currentOptionPanelVariantName: variant,
        },
    });

const withStoreMock = (render: () => VNode, variant: any): VNode => {
    const store = storeMock(variant);

    return <StoreProvider value={store}>{render()}</StoreProvider>;
};

export const defaultView = (): VNode =>
    withStoreMock(() => <OptionsPanel />, 'connectCollapsed');

export const connectExpanded = (): VNode =>
    withStoreMock(() => <OptionsPanel />, 'connectExpanded');

export const entityFormCollapsed = (): VNode =>
    withStoreMock(() => <OptionsPanel />, 'entityFormCollapsed');

export const entityFormExpanded = (): VNode =>
    withStoreMock(() => <OptionsPanel />, 'entityFormExpanded');
