export const masterKey = (val?: string) => {
    return (val && val.length >= 6) || 'optionsPanel.masterKeyTooShort';
};

export const label = (val?: string): boolean | string => {
    return (val && val.length >= 4) || 'optionsPanel.labelTooShort';
};

export const login = (val?: string): boolean | string => {
    return (val && val.length >= 6) || 'optionsPanel.loginTooShort';
};

export const password = (val?: string): boolean | string => {
    return (val && val.length >= 4) || 'optionsPanel.passwordTooShort';
};

export const adminKey = (val?: string): boolean | string => {
    return (val && val.length >= 10) || 'settings.adminKeyTooShort';
};
