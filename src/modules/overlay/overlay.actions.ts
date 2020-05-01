import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';
import { SnackbarType, SnackbarMessage } from './overlay.constants';
import { OverlayState } from '@/modules/overlay/overlay.state';

const merge = mergeState<OverlayState>('overlay');

export const overlayActions = {
    hideSnackbar(appState: AppState, messageId: number): Partial<AppState> {
        return merge({
            snackbarMessages: appState.overlay.snackbarMessages.filter(
                (message: SnackbarMessage) => message.id !== messageId
            ),
        });
    },
    showSnackbar(
        appState: AppState,
        messageKey: string,
        type: SnackbarType
    ): Partial<AppState> {
        return merge({
            snackbarMessages: [
                ...appState.overlay.snackbarMessages,
                {
                    id: Date.now(),
                    messageKey,
                    type,
                },
            ],
        });
    },
    showGlobalLoader(): Partial<AppState> {
        return merge({ isGlobalLoaderVisible: true });
    },
    hideGlobalLoader(): Partial<AppState> {
        return merge({ isGlobalLoaderVisible: false });
    },
} as const;
