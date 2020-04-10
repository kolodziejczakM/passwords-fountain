import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';

export const databaseState = {};

export type DatabaseState = typeof databaseState;
const merge = mergeState<DatabaseState>('database');

export const databaseActions = {
    noop(appState: AppState): Partial<AppState> {
        return merge({});
    },
} as const;
