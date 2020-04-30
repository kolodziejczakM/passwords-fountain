import { AppState, store } from '@/store';
import { Client } from 'faunadb';
import { callAction, mergeState } from '@/common/utils/store';
import { databaseActions } from '@/modules/database/database.actions';
import {
    selectIsClientSet,
    selectClient,
} from '@/modules/database/database.selectors';
import {
    OptionsPanelVariantName,
    optionsPanelVariantNames,
    PasswordEntityPayload,
    PasswordEntityPayloadReferable,
} from '@/modules/passwordList/passwordList.constants';
import { PasswordListState } from '@/modules/passwordList/passwordList.state';
import { overlayActions } from '@/modules/overlay/overlay.actions';

const merge = mergeState<PasswordListState>('passwordList');

export const passwordListActions = {
    switchOptionPanelVariant: (
        appState: AppState,
        optionPanelVariantName: OptionsPanelVariantName
    ): Partial<AppState> => {
        return merge({
            currentOptionPanelVariantName: optionPanelVariantName,
        });
    },
    resetSelectedAndDecryptedEntity: (): Partial<AppState> => {
        return merge({
            selectedAndDecryptedEntity: {} as PasswordEntityPayloadReferable,
        });
    },
    setSelectedAndDecryptedEntity: (
        appState: AppState,
        entity: PasswordEntityPayloadReferable
    ): Partial<AppState> => {
        return merge({
            selectedAndDecryptedEntity: entity,
        });
    },
    fetchPasswords: async (
        appState: AppState,
        masterKey: string,
        adminKey: string
    ): Promise<Partial<AppState>> => {
        callAction(overlayActions.showGlobalLoader);
        const { fetchAllPasswordEntities } = await import(
            '@/modules/database/database.service'
        );

        if (!selectIsClientSet(appState)) {
            await callAction(databaseActions.setClient, masterKey, adminKey);
        }

        const client = selectClient(store.getState()) as Client;

        try {
            const passwords = await fetchAllPasswordEntities(client);
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                overlayActions.showSnackbar,
                'snackbar.passwordsFetchedSuccessfully',
                'success'
            );
            callAction(
                passwordListActions.switchOptionPanelVariant,
                optionsPanelVariantNames.entityFormCollapsed
            );

            return merge({ passwords });
        } catch (err) {
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                overlayActions.showSnackbar,
                'snackbar.couldNotFetchPasswords',
                'error'
            );
            return merge({});
        }
    },
    addNewPassword: async (
        appState: AppState,
        newEntityPayload: PasswordEntityPayload,
        masterKey: string
    ): Promise<Partial<AppState>> => {
        callAction(overlayActions.showGlobalLoader);
        const { createPasswordEntity } = await import(
            '@/modules/database/database.service'
        );
        const { encrypt } = await import('@/modules/cipher/cipher.service');

        const client = selectClient(store.getState()) as Client;

        try {
            const encryptedPasswordEntity = encrypt(
                {
                    login: newEntityPayload.login,
                    password: newEntityPayload.password,
                },
                masterKey,
                true
            );
            await createPasswordEntity(client, {
                label: newEntityPayload.label,
                value: encryptedPasswordEntity,
            });
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                passwordListActions.switchOptionPanelVariant,
                optionsPanelVariantNames.entityFormCollapsed
            );
        } catch (err) {
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                overlayActions.showSnackbar,
                'snackbar.couldNotCreateNewPassword',
                'error'
            );
        } finally {
            return merge({});
        }
    },
    editPassword: async (
        appState: AppState,
        entityPayload: PasswordEntityPayloadReferable,
        masterKey: string
    ): Promise<Partial<AppState>> => {
        callAction(overlayActions.showGlobalLoader);
        const { updatePasswordEntity } = await import(
            '@/modules/database/database.service'
        );
        const { encrypt } = await import('@/modules/cipher/cipher.service');

        const client = selectClient(store.getState()) as Client;

        try {
            const encryptedPasswordEntity = encrypt(
                {
                    login: entityPayload.login,
                    password: entityPayload.password,
                },
                masterKey,
                true
            );
            await updatePasswordEntity(client, entityPayload.refId, {
                label: entityPayload.label,
                value: encryptedPasswordEntity,
            });
            callAction(overlayActions.hideGlobalLoader);
            callAction(passwordListActions.resetSelectedAndDecryptedEntity);
            callAction(
                passwordListActions.switchOptionPanelVariant,
                optionsPanelVariantNames.entityFormCollapsed
            );
        } catch (err) {
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                overlayActions.showSnackbar,
                'snackbar.couldNotEditPassword',
                'error'
            );
        } finally {
            return merge({});
        }
    },
    removePassword: async (
        appState: AppState,
        refId: string
    ): Promise<Partial<AppState>> => {
        callAction(overlayActions.showGlobalLoader);
        const { deletePasswordEntity } = await import(
            '@/modules/database/database.service'
        );

        const client = selectClient(store.getState()) as Client;

        try {
            await deletePasswordEntity(client, refId);
            callAction(overlayActions.hideGlobalLoader);
        } catch (err) {
            callAction(overlayActions.hideGlobalLoader);
            callAction(
                overlayActions.showSnackbar,
                'snackbar.couldNotRemovePassword',
                'error'
            );
        } finally {
            return merge({});
        }
    },
};
