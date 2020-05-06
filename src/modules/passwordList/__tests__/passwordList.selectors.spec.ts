import * as passwordListSelectors from '../passwordList.selectors';

// re-create state each time to prevent selector caching
const getState = (changes = {}) => ({
    passwordList: {
        selectedAndDecryptedEntity: {},
        currentOptionPanelVariantName: 'variant_mock',
        passwords: [
            {
                ref: {
                    id: 'mock_ref_id',
                    value: { id: 'mock_ref_id' },
                },
                ts: 10,
                data: {
                    label: 'Bank account',
                    value: 'lw8ri;u23nw/a',
                },
            },
        ],
        ...changes,
    },
});

describe('PasswordList selectors', () => {
    describe('selectPasswords', () => {
        it('selects', () => {
            expect(
                passwordListSelectors.selectPasswords(getState() as any)
            ).toEqual(getState().passwordList.passwords);
        });
    });

    describe('selectCurrentOptionPanelVariantName', () => {
        it('selects', () => {
            expect(
                passwordListSelectors.selectCurrentOptionPanelVariantName(
                    getState() as any
                )
            ).toEqual(getState().passwordList.currentOptionPanelVariantName);
        });
    });

    describe('selectSelectedAndDecryptedEntity', () => {
        it('selects', () => {
            expect(
                passwordListSelectors.selectSelectedAndDecryptedEntity(
                    getState() as any
                )
            ).toEqual(getState().passwordList.selectedAndDecryptedEntity);
        });
    });

    describe('selectIsInEditMode', () => {
        describe('when selectedAndDecryptedEntity is empty', () => {
            it('returns FALSE', () => {
                expect(
                    passwordListSelectors.selectIsInEditMode(getState() as any)
                ).toEqual(false);
            });
        });

        describe('when selectedAndDecryptedEntity is not empty', () => {
            it('returns TRUE', () => {
                expect(
                    passwordListSelectors.selectIsInEditMode(
                        getState({
                            selectedAndDecryptedEntity: { something: {} },
                        }) as any
                    )
                ).toEqual(true);
            });
        });
    });

    describe('selectSelectedAndDecryptedEntityByRefId', () => {
        describe('when entity with input refId has been found', () => {
            it('returns entity', () => {
                expect(
                    passwordListSelectors.selectSelectedAndDecryptedEntityByRefId(
                        '15'
                    )(
                        getState({
                            selectedAndDecryptedEntity: { refId: '15' },
                        }) as any
                    )
                ).toEqual({ refId: '15' });
            });
        });

        describe('when entity with input refId is not there', () => {
            it('returns empty object', () => {
                expect(
                    passwordListSelectors.selectSelectedAndDecryptedEntityByRefId(
                        '17'
                    )(
                        getState({
                            selectedAndDecryptedEntity: { refId: '15' },
                        }) as any
                    )
                ).toEqual({});
            });
        });
    });
});
