import { createSelector } from 'reselect';
import { InitialState } from '../../store';
import { OverlayDomain } from './overlay.model';

const selectOverlayDomain = (state: InitialState): OverlayDomain =>
    state.overlay;

export const selectSnackbarMessageKey = createSelector(
    selectOverlayDomain,
    overlay => overlay.snackbarMessageKey
);

export const selectSnackbarType = createSelector(
    selectOverlayDomain,
    overlay => overlay.snackbarType
);
