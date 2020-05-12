import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelConnectExpanded } from './optionsPanelConnectExpanded.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {};

describe('OptionsPanelConnectExpanded', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <OptionsPanelConnectExpanded
                    switchCurrentVariantName={(): void => {
                        /* eslint-disable @typescript-eslint/no-empty-function */
                    }}
                />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
