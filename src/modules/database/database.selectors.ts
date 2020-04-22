import { createSelector } from 'reselect';
import { AppState } from '@/store';
import { DatabaseState } from './database.state';
import { adminKeyLocalStorageKeyName } from './database.constants';
import { Client } from 'faunadb';

const selectDatabase = (state: AppState): DatabaseState => state.database;

export const selectAdminKey = (): string | null =>
    localStorage.getItem(adminKeyLocalStorageKeyName);

export const selectClient = createSelector(
    selectDatabase,
    (databaseState: DatabaseState): Client | {} => databaseState.client
);

export const selectIsClientSet = createSelector(
    selectClient,
    (client: Client | {}): boolean => Object.keys(client).length !== 0
);

export const selectIsFirstTimeOnDevice = createSelector(
    selectAdminKey,
    (adminKey: string | null): boolean => {
        return !Boolean(adminKey);
    }
);
