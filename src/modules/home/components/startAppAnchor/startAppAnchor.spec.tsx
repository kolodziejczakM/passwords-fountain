import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { StartAppAnchor } from './startAppAnchor.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {};

describe('StartAppAnchor', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <StartAppAnchor />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
