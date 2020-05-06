import * as overlaySelectors from '../overlay.selectors';

// re-create state each time to prevent selector caching
const getState = (changes = {}) => ({
    overlay: {
        isGlobalLoaderVisible: false,
        snackbarMessages: [],
        ...changes,
    },
});

describe('Overlay selectors', () => {
    describe('selectSnackbarMessages', () => {
        it('selects', () => {
            expect(
                overlaySelectors.selectSnackbarMessages(getState() as any)
            ).toEqual(getState().overlay.snackbarMessages);
        });
    });

    describe('selectIsSnackbarVisible', () => {
        describe('when snackbarMessages list is not empty', () => {
            it('returns TRUE', () => {
                expect(
                    overlaySelectors.selectIsSnackbarVisible(
                        getState({
                            snackbarMessages: [...Array(3)],
                        }) as any
                    )
                ).toEqual(true);
            });
        });

        describe('when snackbarMessages list is empty', () => {
            it('returns FALSE', () => {
                expect(
                    overlaySelectors.selectIsSnackbarVisible(
                        getState({}) as any
                    )
                ).toEqual(false);
            });
        });
    });

    describe('selectIsGlobalLoaderVisible', () => {
        it('selects', () => {
            expect(
                overlaySelectors.selectIsGlobalLoaderVisible(getState() as any)
            ).toEqual(getState().overlay.isGlobalLoaderVisible);
        });
    });
});
