export const invisibleSnackbarValue = '';

export enum snackbarTypes {
    success = 'success',
    info = 'info',
    error = 'error',
}

export const snackbarVisibilityTime = 3000;

export type SnackbarType = keyof typeof snackbarTypes;
