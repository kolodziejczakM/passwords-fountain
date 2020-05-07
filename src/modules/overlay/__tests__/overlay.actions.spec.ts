import { overlayActions } from '../overlay.actions';
import { AppState, store } from '@/store';

describe('Overlay actions', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('hideSnackbar', () => {
        it('removes snackbar message from snackbarMessages list', () => {
            const state = {
                overlay: {
                    snackbarMessages: [
                        { id: 0, messageKey: 'Hello', type: 'success' },
                        { id: 1, messageKey: 'Bye', type: 'error' },
                    ],
                },
            };
            jest.spyOn(store, 'getState').mockReturnValue(state as any);
            const newState = overlayActions.hideSnackbar(state as AppState, 0);

            expect(newState).toEqual({
                overlay: {
                    snackbarMessages: [
                        { id: 1, messageKey: 'Bye', type: 'error' },
                    ],
                },
            });
        });
    });

    describe('showSnackbar', () => {
        it('adds snackbar message to the end of snackbarMessages list ', () => {
            const state = {
                overlay: {
                    snackbarMessages: [
                        { id: 0, messageKey: 'Hello', type: 'success' },
                        { id: 1, messageKey: 'Bye', type: 'error' },
                    ],
                },
            };
            jest.spyOn(store, 'getState').mockReturnValue(state as any);

            const newState = overlayActions.showSnackbar(
                state as AppState,
                'Nice to meet you',
                'info'
            );

            expect(newState).toEqual({
                overlay: {
                    snackbarMessages: [
                        { id: 0, messageKey: 'Hello', type: 'success' },
                        { id: 1, messageKey: 'Bye', type: 'error' },
                        {
                            id: expect.any(Number),
                            messageKey: 'Nice to meet you',
                            type: 'info',
                        },
                    ],
                },
            });
        });
    });

    describe('showGlobalLoader', () => {
        it('changes isGlobalLoaderVisible to TRUE', () => {
            jest.spyOn(store, 'getState').mockReturnValue({
                overlay: {
                    isGlobalLoaderVisible: false,
                },
            } as any);
            const newState = overlayActions.showGlobalLoader();

            expect(newState).toEqual({
                overlay: { isGlobalLoaderVisible: true },
            });
        });
    });

    describe('hideGlobalLoader', () => {
        it('changes isGlobalLoaderVisible to FALSE', () => {
            jest.spyOn(store, 'getState').mockReturnValue({
                overlay: {
                    isGlobalLoaderVisible: true,
                },
            } as any);
            const newState = overlayActions.hideGlobalLoader();

            expect(newState).toEqual({
                overlay: { isGlobalLoaderVisible: false },
            });
        });
    });
});
