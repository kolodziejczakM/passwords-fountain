import {
    VariantName,
    variantNames,
} from '@/modules/passwordList/passwordList.contants';
import { PasswordEntity } from '@/modules/database/database.service';

export const passwordListState = {
    currentOptionPanelVariantName: variantNames.connectCollapsed as VariantName,
    passwords: [] as PasswordEntity[],
};

export type PasswordListState = typeof passwordListState;
