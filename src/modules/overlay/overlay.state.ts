import { SnackbarMessage } from '@/modules/overlay/overlay.constants';

export const overlayState = {
    isGlobalLoaderVisible: false,
    snackbarMessages: [] as SnackbarMessage[],
};

export type OverlayState = typeof overlayState;
