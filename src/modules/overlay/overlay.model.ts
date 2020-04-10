import { AppState } from '@/store';
import { mergeState, callAction } from '@/common/utils/store';
import {
    invisibleSnackbarValue,
    snackbarVisibilityTime,
    SnackbarType,
} from './overlay.constants';

export const overlayState = {
    snackbarMessageKey: invisibleSnackbarValue,
    snackbarType: invisibleSnackbarValue,
    fetchedPhotos: false,
    fetchedPosts: false,
    fetchedAll: false,
};

export type OverlayState = typeof overlayState;
const merge = mergeState<OverlayState>('overlay');

export const overlayActions = {
    showSnackbar(
        appState: AppState,
        messageKey: string,
        type: SnackbarType
    ): Partial<AppState> {
        setTimeout(() => {
            callAction(overlayActions.hideSnackbar);
        }, snackbarVisibilityTime);

        return merge({ snackbarMessageKey: messageKey, snackbarType: type });
    },
    hideSnackbar(): Partial<AppState> {
        return merge({
            snackbarMessageKey: invisibleSnackbarValue,
            snackbarType: invisibleSnackbarValue,
        });
    },
} as const;
