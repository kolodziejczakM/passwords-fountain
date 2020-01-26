import { h } from 'preact';
import { App } from '../src/app/app';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

export default {
    title: 'App',
};

const storeMock = createStore({ count: 12 });

export const withSampleDescription = (): any => (
    <StoreProvider value={storeMock}>
        <App description="This is test description" />
    </StoreProvider>
);
