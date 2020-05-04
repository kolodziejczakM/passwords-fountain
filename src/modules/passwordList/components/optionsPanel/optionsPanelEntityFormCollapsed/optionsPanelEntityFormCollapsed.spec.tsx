import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelEntityFormCollapsed } from './optionsPanelEntityFormCollapsed.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    passwordList: {
        selectedAndDecryptedEntity: {},
    },
};

describe('OptionsPanelEntityFormCollapsed', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <OptionsPanelEntityFormCollapsed
                    switchCurrentVariantName={(): void => {
                        // TODO
                    }}
                />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
