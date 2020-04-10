import { AppState, store } from '@/store';
import { Action } from 'unistore';

export const mergeState = <T>(moduleName: keyof AppState) => (
    changedState: Partial<T>
): Partial<AppState> => ({
    [moduleName]: { ...store.getState()[moduleName], ...changedState },
});

export const callAction = (
    action: Action<AppState>,
    ...args: any[]
): Promise<void> | void => {
    return store.action(action)(...args);
};

export const callAfterReturn = (callback: () => any): void => {
    setTimeout((): void => {
        callback();
    });
};
