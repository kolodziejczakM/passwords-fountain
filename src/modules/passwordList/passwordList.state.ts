import {
    PasswordEntityPayloadReferable,
    OptionsPanelVariantName,
    optionsPanelVariantNames,
} from '@/modules/passwordList/passwordList.constants';
import { PasswordEntityRaw } from '@/modules/database/database.service';

export const passwordListState = {
    currentOptionPanelVariantName: optionsPanelVariantNames.connectCollapsed as OptionsPanelVariantName,
    passwords: [] as PasswordEntityRaw[],
    selectedAndDecryptedEntity: {} as PasswordEntityPayloadReferable,
};

export type PasswordListState = typeof passwordListState;
