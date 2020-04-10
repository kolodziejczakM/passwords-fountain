import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';

export const homeState = {};

export type HomeState = typeof homeState;
const merge = mergeState<HomeState>('home');

export const homeActions = {} as const;
