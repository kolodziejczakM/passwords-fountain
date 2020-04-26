import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { PasswordListState } from './passwordList.state';
import { PasswordEntityPayloadReferable } from '@/modules/passwordList/passwordList.constants';

const selectPasswordList = (state: AppState): PasswordListState =>
    state.passwordList;

const mock = [
    {
        ref: { id: 'x1', value: { id: 'x1 ' } },
        ts: Date.now(),
        data: { label: 'Bank account', value: 'v1' },
    },
    {
        ref: { id: 'x2', value: { id: 'x2 ' } },
        ts: Date.now(),
        data: { label: 'Origin', value: 'v2' },
    },
    {
        ref: { id: 'x3', value: { id: 'x3 ' } },
        ts: Date.now(),
        data: { label: 'Steam', value: 'v3' },
    },
    {
        ref: { id: 'x4', value: { id: 'x4' } },
        ts: Date.now(),
        data: { label: 'Xiaomi', value: 'v4' },
    },
];

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
