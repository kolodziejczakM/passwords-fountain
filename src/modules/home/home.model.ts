import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';
import { homeEmitter, homeEventTypes } from '@/modules/home/home.events';

const change = mergeState('home');

export const homeState = {} as const;

export type HomeState = typeof homeState;

export const homeActions = {
    noop(appState: AppState): Partial<AppState> {
        return change({});
    },
} as const;

export { useAction } from '@preact-hooks/unistore';
