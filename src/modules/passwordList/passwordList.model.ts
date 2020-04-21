import { AppState } from '@/store';
import { Store } from 'unistore';
import { Client } from 'faunadb';
import { mergeState } from '@/common/utils/store';
import { databaseActions } from '@/modules/database/database.model';
import {
    selectIsClientSet,
    selectClient,
} from '@/modules/database/database.selectors';
import { PasswordEntity } from '@/modules/database/database.service';
import {
    VariantName,
    variantNames,
} from '@/modules/passwordList/passwordList.contants';

export const passwordListState = {
    currentOptionPanelVariantName: variantNames.connectCollapsed as VariantName,
    passwords: [] as PasswordEntity[],
};

export type PasswordListState = typeof passwordListState;
const merge = mergeState<PasswordListState>('passwordList');

export const passwordListActions = (store: Store<AppState>) =>
    ({
        switchOptionPanelVariant: (
            appState: AppState,
            optionPanelVariantName: VariantName
        ): Partial<AppState> => {
            return merge(
                {
                    currentOptionPanelVariantName: optionPanelVariantName,
                },
                store
            );
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
                await store.action(databaseActions(store).setClient)(
                    masterKey,
                    adminKey
                );
            }
            const client = selectClient(store.getState());
            // TODO: Cache it?
            const passwords = await fetchAllPasswordEntities(client as Client);

            // TODO: hide global loader
            // TODO: setCurrentOptionPanelVariant (if passwords.length > 0 'decode' if not 'form'

            return merge({ passwords }, store);
        },
    } as const);
