import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { OverlayState } from './overlay.model';
import { SnackbarType } from './overlay.constants';

const selectOverlay = (state: AppState): OverlayState => state.overlay;

export const selectSnackbarMessageKey = createSelector(
    selectOverlay,
    overlay => overlay.snackbarMessageKey
);

export const selectSnackbarType = createSelector(
    selectOverlay,
    (overlay): SnackbarType | string => overlay.snackbarType
);

export const selectIsSnackbarVisible = createSelector(
    selectSnackbarMessageKey,
    (messageKey: string): boolean => Boolean(messageKey.length)
);

export { useSelector } from '@preact-hooks/unistore';
