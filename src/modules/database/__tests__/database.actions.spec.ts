import { databaseActions } from '../database.actions';
import { selectIsClientSet } from '../database.selectors';
import * as databaseService from '../database.service';
import * as cipherService from '../../cipher/cipher.service';
import * as storeUtils from '@/common/utils/store';
import { overlayActions } from '../../overlay/overlay.actions';

describe('Database actions', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('setClient', () => {
        describe('success path', () => {
            it('stores encryptedAdminKey into localStorage', async () => {
                jest.spyOn(localStorage.__proto__, 'setItem');
                jest.spyOn(databaseService, 'setupClient').mockResolvedValue({
                    query: {},
                } as any);
                jest.spyOn(cipherService, 'encrypt').mockReturnValue('abcdef');

                await databaseActions.setClient(
                    {} as any,
                    'master_key',
                    'admin_key'
                );
                expect(localStorage.setItem).toHaveBeenCalledWith(
                    'ak',
                    'abcdef'
                );
            });

            it('stores client into store', async () => {
                jest.spyOn(databaseService, 'setupClient').mockResolvedValue({
                    query: {},
                } as any);
                jest.spyOn(cipherService, 'encrypt').mockReturnValue('abcdef');

                const state = {
                    database: {
                        client: {},
                    },
                };
                const newState = await databaseActions.setClient(
                    state as any,
                    'master_key',
                    'admin_key'
                );

                expect(selectIsClientSet(newState as any)).toBe(true);
            });
        });

        describe('error path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                jest.spyOn(storeUtils, 'callAction');
                jest.spyOn(databaseService, 'setupClient').mockRejectedValue(
                    {} as any
                );
                try {
                    await databaseActions.setClient(
                        {} as any,
                        'master_key',
                        'admin_key'
                    );
                } catch (err) {
                    expect(storeUtils.callAction).toHaveBeenCalledWith(
                        overlayActions.hideGlobalLoader
                    );
                }
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                jest.spyOn(storeUtils, 'callAction');
                jest.spyOn(databaseService, 'setupClient').mockRejectedValue(
                    {} as any
                );

                await databaseActions.setClient(
                    {} as any,
                    'masterKey',
                    'admin_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.couldNotConnectToDB',
                    'error'
                );
            });
        });
    });
});
