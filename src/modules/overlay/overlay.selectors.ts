import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { OverlayState } from './overlay.model';

const selectOverlay = (state: AppState): OverlayState => state.overlay;

export const selectSnackbarMessageKey = createSelector(
    selectOverlay,
    overlay => overlay.snackbarMessageKey
);

export const selectSnackbarType = createSelector(
    selectOverlay,
    overlay => overlay.snackbarType
);
