import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { PasswordListState } from './passwordList.state';
import { PasswordEntityPayloadReferable } from '@/modules/passwordList/passwordList.constants';

const selectPasswordList = (state: AppState): PasswordListState =>
    state.passwordList;

export const selectPasswords = createSelector(
    selectPasswordList,
    (passwordListState: PasswordListState) => passwordListState.passwords
);

export const selectCurrentOptionPanelVariantName = createSelector(
    selectPasswordList,
    (passwordListState: PasswordListState) =>
        passwordListState.currentOptionPanelVariantName
);

export const selectSelectedAndDecryptedEntity = createSelector(
    selectPasswordList,
    (passwordListState: PasswordListState) =>
        passwordListState.selectedAndDecryptedEntity
);

export const selectIsInEditMode = createSelector(
    selectSelectedAndDecryptedEntity,
    (selectedAndDecryptedEntity: PasswordEntityPayloadReferable) =>
        Object.keys(selectedAndDecryptedEntity).length !== 0
);

export const selectSelectedAndDecryptedEntityByRefId = (refId: string) =>
    createSelector(
        selectSelectedAndDecryptedEntity,
        (selectedAndDecryptedEntity: PasswordEntityPayloadReferable) => {
            if (selectedAndDecryptedEntity.refId === refId) {
                return selectedAndDecryptedEntity;
            }

            return {} as PasswordEntityPayloadReferable;
        }
    );
