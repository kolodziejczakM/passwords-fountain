export const masterKey = (val?: string) => {
    return (val && val.length >= 8) || 'optionsPanel.masterKeyTooShort';
};

export const label = (val?: string): boolean | string => {
    return (val && val.length >= 3) || 'optionsPanel.labelTooShort';
};

export const login = (val?: string): boolean | string => {
    return (val && val.length >= 3) || 'optionsPanel.loginTooShort';
};

export const password = (val?: string): boolean | string => {
    return (val && val.length >= 3) || 'optionsPanel.passwordTooShort';
};

export const adminKey = (val?: string): boolean | string => {
    return (val && val.length >= 40) || 'settings.adminKeyTooShort';
};
