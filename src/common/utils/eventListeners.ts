import { Handler } from 'mitt';

// Use-case: In case of dispatching events (via emitter.emit) from inside reducer's handler
// when you want to call its listener after establishing new state.
// Great for data fetching purposes e.g. such listener will be called after setting "isFetching" flag.
export const asyncListener = (listener: Handler): Handler => (
    event?: any
): void => {
    setTimeout((): void => {
        listener(event);
    });
};

// Use-case: In case of dispatching events (via emitter.emit) from inside reducer's handler when you want to call
// it right away before state update is being made. Shouldn't be used for any async operations.
export const syncListener = (listener: Handler): Handler => (
    event?: any
): void => {
    listener(event);
};
