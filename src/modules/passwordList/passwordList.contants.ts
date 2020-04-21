export enum variantNames {
    connectCollapsed = 'connectCollapsed',
    connectExpanded = 'connectExpanded',
    entityFormCollapsed = 'entityFormCollapsed',
    entityFormExpanded = 'entityFormExpanded',
}

export type VariantName = keyof typeof variantNames;
