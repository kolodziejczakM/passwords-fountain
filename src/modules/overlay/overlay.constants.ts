export const invisibleSnackbarValue = '';

export const snackbarTypes = {
    success: 'SUCCESS',
    info: 'INFO',
    error: 'ERROR',
} as const;

type SnackbarTypesKey = keyof typeof snackbarTypes;
export type SnackbarType = typeof snackbarTypes[SnackbarTypesKey];
