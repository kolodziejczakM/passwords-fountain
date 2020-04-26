import {
    PasswordEntityPayloadReferable,
    VariantName,
    variantNames,
} from '@/modules/passwordList/passwordList.contants';
import { PasswordEntityRaw } from '@/modules/database/database.service';

export const passwordListState = {
    currentOptionPanelVariantName: variantNames.connectCollapsed as VariantName,
    passwords: [] as PasswordEntityRaw[],
    selectedAndDecryptedEntity: {} as PasswordEntityPayloadReferable,
};

export type PasswordListState = typeof passwordListState;
