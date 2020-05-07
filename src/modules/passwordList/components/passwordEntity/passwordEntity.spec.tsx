import '@testing-library/jest-dom/extend-expect';
import { h } from 'preact';
import { render, fireEvent } from '@testing-library/preact';
import { PasswordEntity } from './passwordEntity.component';
import { StoreProvider } from '@preact-hooks/unistore';
import createStore from 'unistore';

const stateMock = {
    passwordList: {
        selectedAndDecryptedEntity: {},
    },
};

const dataMock = {
    ref: { id: 'mock_ref_id', value: { id: 'mock_ref_id' } },
    ts: Date.now(),
    data: {
        label: 'My EA Account',
        value: 'mock_encrypted_login_and_password',
    },
};

describe('PasswordEntity', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('when clicked', () => {
        it('calls onClick callback', () => {
            const onClickCb = jest.fn();

            const { queryAllByRole } = render(
                <StoreProvider value={createStore(stateMock)}>
                    <PasswordEntity
                        data={dataMock}
                        isSelected={false}
                        onClick={onClickCb}
                    />
                </StoreProvider>
            );

            fireEvent(
                queryAllByRole('button')[0],
                new MouseEvent('click', { detail: 1 })
            );
            expect(onClickCb).toHaveBeenCalledTimes(1);
        });
    });

    describe('when not selected', () => {
        it('renders', () => {
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

    describe('when selected', () => {
        it('renders with additional icon buttons', () => {
            const { asFragment } = render(
                <StoreProvider value={createStore(stateMock)}>
                    <PasswordEntity
                        data={dataMock}
                        isSelected
                        onClick={() => {
                            /* eslint-disable @typescript-eslint/no-empty-function */
                        }}
                    />
                </StoreProvider>
            );

            expect(asFragment()).toMatchSnapshot();
        });

        describe('when eye icon button has been clicked', () => {
            it('renders prompt', async () => {
                const onClickCb = jest.fn();

                const { queryAllByRole, asFragment } = render(
                    <StoreProvider value={createStore(stateMock)}>
                        <PasswordEntity
                            data={dataMock}
                            isSelected
                            onClick={onClickCb}
                        />
                    </StoreProvider>
                );

                fireEvent.click(queryAllByRole('button')[2]);

                expect(asFragment()).toMatchSnapshot();
            });
        });

        describe('when bin icon button has been clicked', () => {
            it('renders prompt', async () => {
                const onClickCb = jest.fn();

                const { queryAllByRole, asFragment } = render(
                    <StoreProvider value={createStore(stateMock)}>
                        <PasswordEntity
                            data={dataMock}
                            isSelected
                            onClick={onClickCb}
                        />
                    </StoreProvider>
                );

                fireEvent.click(queryAllByRole('button')[1]);
                expect(asFragment()).toMatchSnapshot();
            });
        });
    });
});
