import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';
import { adminKeyLocalStorageKeyName } from './database.constants';
import { Client } from 'faunadb';
import { selectAdminKey } from '@/modules/database/database.selectors';

export const databaseState = {
    client: {},
};

export type DatabaseState = typeof databaseState;
const merge = mergeState<DatabaseState>('database');

export const databaseActions = {
    setClient: async (
        appState: AppState,
        shelfKey: string,
        adminKey: string
    ): Promise<Partial<AppState>> => {
        const { setupClient } = await import('./database.service');
        const { encode, decode } = await import(
            '@/modules/cipher/cipher.service'
        );

        const rawAdminKey =
            adminKey === selectAdminKey()
                ? decode(adminKey, shelfKey)
                : adminKey;

        const client: Client = await setupClient({
            secret: rawAdminKey,
        });
        const encodedAdminKey = encode(rawAdminKey, shelfKey);
        localStorage.setItem(adminKeyLocalStorageKeyName, encodedAdminKey);
        return merge({ client });
    },
} as const;
