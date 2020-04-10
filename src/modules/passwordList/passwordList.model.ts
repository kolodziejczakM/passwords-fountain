import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';

export const passwordListState = {};

export type PasswordListState = typeof passwordListState;
const merge = mergeState<PasswordListState>('passwordList');

export const passwordListActions = {} as const;

export { useAction } from '@preact-hooks/unistore';
