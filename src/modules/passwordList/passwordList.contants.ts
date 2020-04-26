export enum variantNames {
    connectCollapsed = 'connectCollapsed',
    connectExpanded = 'connectExpanded',
    entityFormCollapsed = 'entityFormCollapsed',
    entityFormExpanded = 'entityFormExpanded',
}

export type VariantName = keyof typeof variantNames;

export const placeholderEntityValue = 'XXX';

export interface PasswordEntityVulnerablePayload {
    password: string;
    login: string;
}

export interface PasswordEntityPayload extends PasswordEntityVulnerablePayload {
    label: string;
}

export interface PasswordEntityPayloadReferable extends PasswordEntityPayload {
    refId: string;
}
