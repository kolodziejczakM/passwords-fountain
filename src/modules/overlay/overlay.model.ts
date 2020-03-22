import { invisibleSnackbarValue, SnackbarType } from './overlay.constants';
import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';

const change = mergeState('overlay');

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
        return change({ snackbarMessageKey: messageKey, snackbarType: type });
    },
    hideSnackbar(): Partial<AppState> {
        return change({
            snackbarMessageKey: invisibleSnackbarValue,
            snackbarType: invisibleSnackbarValue,
        });
    },
};
