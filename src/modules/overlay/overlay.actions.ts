import { AppState } from '@/store';
import { callAction, mergeState } from '@/common/utils/store';
import {
    invisibleSnackbarValue,
    snackbarVisibilityTime,
    SnackbarType,
} from './overlay.constants';
import { OverlayState } from '@/modules/overlay/overlay.state';

const merge = mergeState<OverlayState>('overlay');

export const overlayActions = {
    hideSnackbar(): Partial<AppState> {
        return merge({
            snackbarMessageKey: invisibleSnackbarValue,
            snackbarType: invisibleSnackbarValue,
        });
    },
    showSnackbar(
        appState: AppState,
        messageKey: string,
        type: SnackbarType
    ): Partial<AppState> {
        setTimeout(() => {
            callAction(overlayActions.hideSnackbar);
        }, snackbarVisibilityTime);

        return merge({
            snackbarMessageKey: messageKey,
            snackbarType: type,
        });
    },
    showGlobalLoader(appState: AppState): Partial<AppState> {
        return merge({ isGlobalLoaderVisible: true });
    },
    hideGlobalLoader(appState: AppState): Partial<AppState> {
        return merge({ isGlobalLoaderVisible: false });
    },
} as const;
