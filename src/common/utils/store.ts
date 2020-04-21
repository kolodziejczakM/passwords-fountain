import { AppState } from '@/store';
import { Store } from 'unistore';

export const mergeState = <T>(moduleName: keyof AppState) => (
    changedState: Partial<T>,
    store: Store<AppState>
): Partial<AppState> => ({
    [moduleName]: { ...store.getState()[moduleName], ...changedState },
});

export const callAfterReturn = (callback: () => any): void => {
    setTimeout((): void => {
        callback();
    });
};
