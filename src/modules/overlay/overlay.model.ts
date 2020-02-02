import { invisibleSnackbarValue, SnackbarType } from './overlay.constants';

export const overlay = {
    snackbarMessageKey: invisibleSnackbarValue,
    snackbarType: invisibleSnackbarValue,
};

export type OverlayDomain = typeof overlay;

type Overlay = {
    overlay: OverlayDomain;
};

export const overlayActions = {
    showSnackbar(
        state: Overlay,
        messageKey: string,
        type: SnackbarType
    ): Partial<Overlay> {
        return {
            overlay: { snackbarMessageKey: messageKey, snackbarType: type },
        };
    },
    hideSnackbar(): Overlay {
        return {
            overlay: {
                snackbarMessageKey: invisibleSnackbarValue,
                snackbarType: invisibleSnackbarValue,
            },
        };
    },
};
