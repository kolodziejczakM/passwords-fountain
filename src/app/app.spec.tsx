import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { App } from './app';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    overlay: {
        snackbarMessages: [],
    },
};

describe('App', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <App />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
