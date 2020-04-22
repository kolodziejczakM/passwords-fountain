import { AppState, store } from '@/store';
import { Client } from 'faunadb';
import { callAction, mergeState } from '@/common/utils/store';
import { databaseActions } from '@/modules/database/database.actions';
import {
    selectIsClientSet,
    selectClient,
} from '@/modules/database/database.selectors';
import { VariantName } from '@/modules/passwordList/passwordList.contants';
import { PasswordListState } from '@/modules/passwordList/passwordList.state';
import { PasswordEntityPayload } from '@/modules/database/database.service';

const merge = mergeState<PasswordListState>('passwordList');

export const passwordListActions = {
    switchOptionPanelVariant: (
        appState: AppState,
        optionPanelVariantName: VariantName
    ): Partial<AppState> => {
        return merge({
            currentOptionPanelVariantName: optionPanelVariantName,
        });
    },
    fetchPasswords: async (
        appState: AppState,
        masterKey: string,
        adminKey: string
    ): Promise<Partial<AppState>> => {
        // TODO: Show global loader
        const { fetchAllPasswordEntities } = await import(
            '@/modules/database/database.service'
        );

        if (!selectIsClientSet(appState)) {
            await callAction(databaseActions.setClient, masterKey, adminKey);
        }
        const client = selectClient(store.getState()) as Client;
        const passwords = await fetchAllPasswordEntities(client);

        // TODO: hide global loader
        return merge({ passwords });
    },
    addNewPassword: async (
        appState: AppState,
        newEntityPayload: PasswordEntityPayload,
        masterKey: string
    ): Promise<Partial<AppState>> => {
        const { createPasswordEntity } = await import(
            '@/modules/database/database.service'
        );
        const { encrypt } = await import('@/modules/cipher/cipher.service');

        const client = selectClient(store.getState()) as Client;
        const encryptedPasswordEntity = encrypt(
            newEntityPayload,
            masterKey,
            true
        );
        await createPasswordEntity(client, encryptedPasswordEntity);
        return merge({});
    },
};
