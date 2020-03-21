import { invisibleSnackbarValue, SnackbarType } from './overlay.constants';
import { AppState } from '../../store';

export const overlayState = {
    snackbarMessageKey: invisibleSnackbarValue,
    snackbarType: invisibleSnackbarValue,
};

export type OverlayState = typeof overlayState;

export const overlayActions = {
    showSnackbar(
        appState: AppState,
        messageKey: string,
        type: SnackbarType
    ): Partial<AppState> {
        return {
            overlay: { snackbarMessageKey: messageKey, snackbarType: type },
        };
    },
    hideSnackbar(): Partial<AppState> {
        return {
            overlay: {
                snackbarMessageKey: invisibleSnackbarValue,
                snackbarType: invisibleSnackbarValue,
            },
        };
    },
};
