import { AppState } from '@/store';
import { callAction, mergeState } from '@/common/utils/store';
import { adminKeyLocalStorageKeyName } from './database.constants';
import { Client } from 'faunadb';
import { selectAdminKey } from '@/modules/database/database.selectors';
import { DatabaseState } from '@/modules/database/database.state';
import { overlayActions } from '@/modules/overlay/overlay.actions';

const merge = mergeState<DatabaseState>('database');

export const databaseActions = {
    setClient: async (
        appState: AppState,
        masterKey: string,
        adminKey: string
    ): Promise<Partial<AppState>> => {
        const { setupClient } = await import('./database.service');
        const { encrypt, decrypt } = await import(
            '@/modules/cipher/cipher.service'
        );

        try {
            const decryptedAdminKey =
                adminKey === selectAdminKey()
                    ? (decrypt(adminKey, masterKey) as string)
                    : adminKey;

            const client: Client = await setupClient({
                secret: decryptedAdminKey,
            });

            const encryptedAdminKey = encrypt(decryptedAdminKey, masterKey);
            localStorage.setItem(
                adminKeyLocalStorageKeyName,
                encryptedAdminKey
            );
            return merge({ client });
        } catch (err) {
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                overlayActions.showSnackbar,
                'snackbar.couldNotConnectToDB',
                'error'
            );
            return merge({});
        }
    },
};
