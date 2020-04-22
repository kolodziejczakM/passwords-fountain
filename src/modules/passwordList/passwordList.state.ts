import {
    VariantName,
    variantNames,
} from '@/modules/passwordList/passwordList.contants';
import { PasswordEntityRaw } from '@/modules/database/database.service';

export const passwordListState = {
    currentOptionPanelVariantName: variantNames.connectCollapsed as VariantName,
    passwords: [] as PasswordEntityRaw[],
};

export type PasswordListState = typeof passwordListState;
