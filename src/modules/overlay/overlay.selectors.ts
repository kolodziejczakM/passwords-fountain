import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { OverlayState } from './overlay.state';

const selectOverlay = (state: AppState): OverlayState => state.overlay;

export const selectSnackbarMessages = createSelector(
    selectOverlay,
    overlay => overlay.snackbarMessages
);

export const selectIsSnackbarVisible = createSelector(
    selectSnackbarMessages,
    snackbarMessages => Boolean(snackbarMessages.length)
);

export const selectIsGlobalLoaderVisible = createSelector(
    selectOverlay,
    overlay => overlay.isGlobalLoaderVisible
);
