import { invisibleSnackbarValue } from '@/modules/overlay/overlay.constants';

export const overlayState = {
    snackbarMessageKey: invisibleSnackbarValue,
    snackbarType: invisibleSnackbarValue,
};

export type OverlayState = typeof overlayState;
