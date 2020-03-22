import { AppState } from '../../store';

export const mergeState = (moduleName: keyof AppState): Function => (
    newState: any
): Partial<AppState> => ({
    [moduleName]: newState,
});
