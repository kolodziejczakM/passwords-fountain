import { AppState } from '@/store';
import { Store } from 'unistore';
import { mergeState } from '@/common/utils/store';
import {
    invisibleSnackbarValue,
    snackbarVisibilityTime,
    SnackbarType,
} from './overlay.constants';

export const overlayState = {
    snackbarMessageKey: invisibleSnackbarValue,
    snackbarType: invisibleSnackbarValue,
};

export type OverlayState = typeof overlayState;
const merge = mergeState<OverlayState>('overlay');

export const overlayActions = (store: Store<AppState>) =>
    ({
        hideSnackbar(): Partial<AppState> {
            return merge(
                {
                    snackbarMessageKey: invisibleSnackbarValue,
                    snackbarType: invisibleSnackbarValue,
                },
                store
            );
        },
        showSnackbar(
            appState: AppState,
            messageKey: string,
            type: SnackbarType
        ): Partial<AppState> {
            setTimeout(() => {
                store.action(overlayActions(store).hideSnackbar)();
            }, snackbarVisibilityTime);

            return merge(
                {
                    snackbarMessageKey: messageKey,
                    snackbarType: type,
                },
                store
            );
        },
    } as const);
