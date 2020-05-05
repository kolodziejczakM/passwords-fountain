import { databaseActions } from '../database.actions';
import { selectIsClientSet } from '../database.selectors';
import * as databaseService from '../database.service';
import * as cipherService from '../../cipher/cipher.service';
import * as storeUtils from '@/common/utils/store';
import { overlayActions } from '../../overlay/overlay.actions';

describe('Database actions', () => {
    describe('setClient', () => {
        describe('success path', () => {
            it('stores encryptedAdminKey into localStorage', async () => {
                const setItemSpy = jest.spyOn(
                    localStorage.__proto__,
                    'setItem'
                );
                const setupClientSpy = jest
                    .spyOn(databaseService, 'setupClient')
                    .mockResolvedValue({ query: {} } as any);

                const encryptSpy = jest
                    .spyOn(cipherService, 'encrypt')
                    .mockReturnValue('abcdef');

                await databaseActions.setClient(
                    {} as any,
                    'master_key',
                    'admin_key'
                );
                expect(localStorage.setItem).toHaveBeenCalledWith(
                    'ak',
                    'abcdef'
                );

                setItemSpy.mockRestore();
                setupClientSpy.mockRestore();
                encryptSpy.mockRestore();
            });

            it('stores client into store', async () => {
                const setupClientSpy = jest
                    .spyOn(databaseService, 'setupClient')
                    .mockResolvedValue({ query: {} } as any);

                const encryptSpy = jest
                    .spyOn(cipherService, 'encrypt')
                    .mockReturnValue('abcdef');

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
                setupClientSpy.mockRestore();
                encryptSpy.mockRestore();
            });
        });

        describe('error path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                const callActionSpy = jest.spyOn(storeUtils, 'callAction');
                const setupClientSpy = jest
                    .spyOn(databaseService, 'setupClient')
                    .mockRejectedValue({} as any);
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
                    callActionSpy.mockRestore();
                    setupClientSpy.mockRestore();
                }
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                const callActionSpy = jest.spyOn(storeUtils, 'callAction');
                const setupClientSpy = jest
                    .spyOn(databaseService, 'setupClient')
                    .mockRejectedValue({} as any);

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

                callActionSpy.mockRestore();
                setupClientSpy.mockRestore();
            });
        });
    });
});
