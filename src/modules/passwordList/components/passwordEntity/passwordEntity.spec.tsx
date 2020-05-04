import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render } from '@testing-library/preact';
import { PasswordEntity } from './passwordEntity.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    passwordList: {
        selectedAndDecryptedEntity: {},
    },
};

const dataMock = {
    ref: { id: 'x1', value: { id: 'x1 ' } },
    ts: Date.now(),
    data: { label: 'My EA Account', value: 'v1' },
};

describe('PasswordEntity', () => {
    it('should render correctly', () => {
        const { asFragment } = render(
            <StoreProvider value={createStore(stateMock)}>
                <PasswordEntity
                    data={dataMock}
                    isSelected={false}
                    onClick={() => {
                        /* eslint-disable @typescript-eslint/no-empty-function */
                    }}
                />
            </StoreProvider>
        );

        expect(asFragment()).toMatchSnapshot();
    });
});
