export const invisibleSnackbarValue = '';

export enum snackbarTypes {
    success = 'success',
    info = 'info',
    error = 'error',
}

export type SnackbarType = keyof typeof snackbarTypes;
