import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { Snackbar } from './snackbar.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    overlay: {
        snackbarMessages: [
            {
                id: 0,
                type: 'success',
                messageKey: 'Passwords fetched!',
            },
        ],
    },
};

describe('Snackbar', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <Snackbar />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
