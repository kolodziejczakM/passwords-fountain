import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { PasswordList } from './passwordList';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    overlay: {
        isGlobalLoaderVisible: false,
    },
    database: {
        client: {},
    },
    passwordList: {
        passwords: [],
    },
};

describe('PasswordList', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <PasswordList />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
