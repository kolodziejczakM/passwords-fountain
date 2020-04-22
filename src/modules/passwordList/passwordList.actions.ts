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
        const client = selectClient(store.getState());
        // TODO: Cache it?
        const passwords = await fetchAllPasswordEntities(client as Client);

        // TODO: hide global loader
        // TODO: setCurrentOptionPanelVariant (if passwords.length > 0 'decode' if not 'form'

        return merge({ passwords });
    },
};
