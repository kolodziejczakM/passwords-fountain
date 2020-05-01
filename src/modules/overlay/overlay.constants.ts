export const snackbarVisibilityTime = 3000;

export enum snackbarTypes {
    success = 'success',
    info = 'info',
    error = 'error',
}

export type SnackbarType = keyof typeof snackbarTypes;

export interface SnackbarMessage {
    id: number;
    messageKey: string;
    type: SnackbarType;
}
