import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';

export const cipherState = {};

export type CipherState = typeof cipherState;
const merge = mergeState<CipherState>('cipher');

export const cipherActions = {
    noop(appState: AppState): Partial<AppState> {
        return merge({});
    },
} as const;
