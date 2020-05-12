import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { OptionsPanelEntityFormExpanded } from './optionsPanelEntityFormExpanded.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    passwordList: {
        selectedAndDecryptedEntity: {},
    },
};

describe('OptionsPanelAddNewExpanded', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <OptionsPanelEntityFormExpanded
                    switchCurrentVariantName={(): void => {
                        /* eslint-disable @typescript-eslint/no-empty-function */
                    }}
                />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
