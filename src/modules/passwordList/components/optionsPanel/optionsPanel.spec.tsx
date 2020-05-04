import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanel } from './optionsPanel.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    passwordList: {
        currentOptionPanelVariantName: 'connectCollapsed',
    },
};

describe('OptionsPanel', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <OptionsPanel />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
