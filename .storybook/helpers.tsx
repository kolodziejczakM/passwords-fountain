import { h, VNode } from 'preact';
import createStore from 'unistore';
import { StoreProvider } from '@preact-hooks/unistore';

export const withStoreMock = (render: () => VNode, mockState: any): VNode => {
    return (
        <StoreProvider value={createStore(mockState)}>{render()}</StoreProvider>
    );
};
