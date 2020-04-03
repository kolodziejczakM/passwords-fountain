import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';
import {
    passwordListEmitter,
    passwordListEventTypes,
} from '@/modules/passwordList/passwordList.events';

const change = mergeState('passwordList');

export const passwordListState = {} as const;

export type PasswordListState = typeof passwordListState;

export const passwordListActions = {
    noop(appState: AppState): Partial<AppState> {
        return change({});
    },
} as const;

export { useAction } from '@preact-hooks/unistore';
