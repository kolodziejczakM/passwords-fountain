import { AppState } from '@/store';
import { mergeState } from '@/common/utils/store';
import { adminKeyLocalStorageKeyName } from './database.constants';
import { Client } from 'faunadb';
import { Store } from 'unistore';
import { selectAdminKey } from '@/modules/database/database.selectors';

export const databaseState = {
    client: {},
};

export type DatabaseState = typeof databaseState;
const merge = mergeState<DatabaseState>('database');

export const databaseActions = (store: Store<AppState>) =>
    ({
        setClient: async (
            appState: AppState,
            masterKey: string,
            adminKey: string
        ): Promise<Partial<AppState>> => {
            const { setupClient } = await import('./database.service');
            const { encrypt, decrypt } = await import(
                '@/modules/cipher/cipher.service'
            );

            const decryptedAdminKey =
                adminKey === selectAdminKey()
                    ? decrypt(adminKey, masterKey)
                    : adminKey;

            const client: Client = await setupClient({
                secret: decryptedAdminKey,
            });

            const encryptedAdminKey = encrypt(decryptedAdminKey, masterKey);
            localStorage.setItem(
                adminKeyLocalStorageKeyName,
                encryptedAdminKey
            );
            return merge({ client }, store);
        },
    } as const);
