import * as databaseSelectors from '../database.selectors';

// re-create state each time to prevent selector caching
const getState = () => ({
    database: {
        client: {
            query: {},
        },
    },
});

describe('Database selectors', () => {
    describe('selectAdminKey', () => {
        describe('when adminKey exists in localStorage', () => {
            it('selects encrypted adminKey', () => {
                jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValue(
                    'xyz'
                );

                expect(databaseSelectors.selectAdminKey()).toBe('xyz');
                jest.restoreAllMocks();
            });
        });

        describe("when adminKey doesn't exist in localStorage", () => {
            it('returns null', () => {
                jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValue(
                    null
                );

                expect(databaseSelectors.selectAdminKey()).toEqual(null);
                jest.restoreAllMocks();
            });
        });
    });

    describe('selectClient', () => {
        it('selects client', () => {
            expect(databaseSelectors.selectClient(getState() as any)).toEqual({
                query: {},
            });
        });
    });

    describe('selectIsClientSet', () => {
        describe('when client object is empty', () => {
            it('returns FALSE', () => {
                expect(
                    databaseSelectors.selectIsClientSet({
                        database: { client: {} },
                    } as any)
                ).toBe(false);
            });
        });

        describe('when client object is not empty', () => {
            it('returns TRUE', () => {
                expect(
                    databaseSelectors.selectIsClientSet(getState() as any)
                ).toBe(true);
            });
        });
    });

    describe('selectIsFirstTimeOnDevice', () => {
        describe('when adminKey is truthful', () => {
            it('returns FALSE', () => {
                jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValue(
                    'xyz'
                );

                expect(
                    databaseSelectors.selectIsFirstTimeOnDevice(
                        getState() as any
                    )
                ).toBe(false);
                jest.restoreAllMocks();
            });
        });

        describe('when adminKey is untruthful', () => {
            it('returns TRUE', () => {
                jest.spyOn(localStorage.__proto__, 'getItem').mockReturnValue(
                    null
                );
                expect(
                    databaseSelectors.selectIsFirstTimeOnDevice(
                        getState() as any
                    )
                ).toBe(true);
                jest.restoreAllMocks();
            });
        });
    });
});
