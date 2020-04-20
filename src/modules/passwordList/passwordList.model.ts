import { AppState, store } from '@/store';
import { Client } from 'faunadb';
import { mergeState, callAction } from '@/common/utils/store';
import { databaseActions } from '@/modules/database/database.model';
import {
    selectIsClientSet,
    selectClient,
} from '@/modules/database/database.selectors';
import {
    fetchAllPasswordEntities,
    PasswordEntity,
} from '@/modules/database/database.service';
import { decodeEntity } from '@/modules/cipher/cipher.service';

export const passwordListState = {
    passwords: [] as PasswordEntity[],
};

export type PasswordListState = typeof passwordListState;
const merge = mergeState<PasswordListState>('passwordList');

export const passwordListActions = {
    fetchPasswords: async (
        appState: AppState,
        shelfKey: string,
        adminKey: string
    ): Promise<Partial<AppState>> => {
        // TODO: Show global loader
        if (!selectIsClientSet(appState)) {
            await callAction(databaseActions.setClient, shelfKey, adminKey);
        }
        const client = selectClient(store.getState());
        // TODO: Cache it?
        const passwords = await fetchAllPasswordEntities(client as Client);
        // TODO: store encrypted passwords in localStorage (?)
        // const decodedPasswords = passwordList.map((entity: PasswordEntity) =>
        //     decodeEntity(entity, shelfKey)
        // );

        // TODO: hide global loader
        // TODO: setCurrentOptionPanelVariant (if passwords.length > 0 'decode' if not 'form'

        return merge({ passwords });
    },
} as const;
