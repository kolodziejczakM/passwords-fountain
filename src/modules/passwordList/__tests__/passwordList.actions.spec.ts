import { passwordListActions } from '../passwordList.actions';
import * as databaseService from '@/modules/database/database.service';
import * as storeUtils from '@/common/utils/store';
import { overlayActions } from '../../overlay/overlay.actions';
import { databaseActions } from '../../database/database.actions';
import { optionsPanelVariantNames } from '../passwordList.constants';
import { store } from '../../../store';

const setupFetchPasswordsSpies = (errorPath = false) => {
    jest.spyOn(storeUtils, 'callAction');
    jest.spyOn(databaseActions, 'setClient').mockResolvedValue({});

    if (errorPath) {
        jest.spyOn(
            databaseService,
            'fetchAllPasswordEntities'
        ).mockRejectedValue({});
    } else {
        jest.spyOn(
            databaseService,
            'fetchAllPasswordEntities'
        ).mockResolvedValue([]);
    }
};

const setupAddNewPasswordSpies = (errorPath = false) => {
    jest.spyOn(storeUtils, 'callAction');
    if (errorPath) {
        jest.spyOn(databaseService, 'createPasswordEntity').mockRejectedValue(
            {}
        );
    } else {
        jest.spyOn(databaseService, 'createPasswordEntity').mockResolvedValue(
            undefined
        );
    }
};

const setupEditPasswordSpies = (errorPath = false) => {
    jest.spyOn(storeUtils, 'callAction');
    if (errorPath) {
        jest.spyOn(databaseService, 'updatePasswordEntity').mockRejectedValue(
            {}
        );
    } else {
        jest.spyOn(databaseService, 'updatePasswordEntity').mockResolvedValue(
            undefined
        );
    }
};

const setupRemovePasswordSpies = (errorPath = false) => {
    jest.spyOn(storeUtils, 'callAction');
    if (errorPath) {
        jest.spyOn(databaseService, 'deletePasswordEntity').mockRejectedValue(
            {}
        );
    } else {
        jest.spyOn(databaseService, 'deletePasswordEntity').mockResolvedValue(
            undefined
        );
    }
};

describe('PasswordList actions', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('switchOptionPanelVariant', () => {
        it('switches optionPanel variant to provided one', () => {
            const state = {
                passwordList: {
                    currentOptionPanelVariantName: 'someDefaultVariant',
                },
            };
            jest.spyOn(store, 'getState').mockReturnValue(state as any);
            const newState = passwordListActions.switchOptionPanelVariant(
                state as any,
                'newVariant' as any
            );

            expect(newState).toEqual({
                passwordList: {
                    currentOptionPanelVariantName: 'newVariant',
                },
            });
        });
    });

    describe('resetSelectedAndDecryptedEntity', () => {
        it('makes selectedAndDecryptedEntity an empty object', () => {
            const state = {
                passwordList: {
                    selectedAndDecryptedEntity: {
                        label: 'Bank account',
                        login: 'SplinterCell12',
                        password: 'P4$$w0rd1',
                        refId: 'mock_ref_id',
                    },
                },
            };
            jest.spyOn(store, 'getState').mockReturnValue(state as any);
            const newState = passwordListActions.resetSelectedAndDecryptedEntity();

            expect(newState).toEqual({
                passwordList: {
                    selectedAndDecryptedEntity: {},
                },
            });
        });
    });

    describe('setSelectedAndDecryptedEntity', () => {
        it('sets selectedAndDecrypted entity to provided one', () => {
            const state = {
                passwordList: {
                    selectedAndDecryptedEntity: {},
                },
            };
            jest.spyOn(store, 'getState').mockReturnValue(state as any);
            const newState = passwordListActions.setSelectedAndDecryptedEntity(
                state as any,
                {
                    label: 'Bank account',
                    login: 'SplinterCell12',
                    password: 'P4$$w0rd1',
                    refId: 'mock_ref_id',
                }
            );

            expect(newState).toEqual({
                passwordList: {
                    selectedAndDecryptedEntity: {
                        label: 'Bank account',
                        login: 'SplinterCell12',
                        password: 'P4$$w0rd1',
                        refId: 'mock_ref_id',
                    },
                },
            });
        });
    });

    describe('fetchPasswords', () => {
        it('calls action: overlayActions.showGlobalLoader', async () => {
            setupFetchPasswordsSpies();
            await passwordListActions.fetchPasswords(
                { database: { client: {} } } as any,
                'master_key',
                'admin_key'
            );

            expect(storeUtils.callAction).toHaveBeenCalledWith(
                overlayActions.showGlobalLoader
            );
        });

        describe('when client is not set', () => {
            it('calls action: databaseActions.setClient', async () => {
                setupFetchPasswordsSpies();

                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key'
                );

                expect(databaseActions.setClient).toHaveBeenCalledWith(
                    expect.any(Object),
                    'master_key',
                    'admin_key'
                );
            });
        });

        describe('when forceConnect', () => {
            it('calls action: databaseActions.setClient', async () => {
                setupFetchPasswordsSpies();

                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key',
                    true
                );

                expect(databaseActions.setClient).toHaveBeenCalledWith(
                    expect.any(Object),
                    'master_key',
                    'admin_key'
                );
            });
        });

        describe('success path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupFetchPasswordsSpies();
                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                setupFetchPasswordsSpies();
                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.passwordsFetchedSuccessfully',
                    'success'
                );
            });

            it('calls action: passwordListActions.switchOptionPanelVariant', async () => {
                setupFetchPasswordsSpies();
                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    passwordListActions.switchOptionPanelVariant,
                    optionsPanelVariantNames.entityFormCollapsed
                );
            });
        });

        describe('error path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupFetchPasswordsSpies(true);
                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                setupFetchPasswordsSpies(true);
                await passwordListActions.fetchPasswords(
                    { database: { client: {} } } as any,
                    'master_key',
                    'admin_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.couldNotFetchPasswords',
                    'error'
                );
            });
        });
    });

    describe('addNewPassword', () => {
        it('calls action: overlayActions.showGlobalLoader', async () => {
            setupAddNewPasswordSpies();
            await passwordListActions.addNewPassword(
                {} as any,
                {
                    label: 'BankAccount',
                    login: 'Tester1234',
                    password: 'TestPassword1234',
                },
                'master_key'
            );

            expect(storeUtils.callAction).toHaveBeenCalledWith(
                overlayActions.showGlobalLoader
            );
        });

        describe('success path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupAddNewPasswordSpies();
                await passwordListActions.addNewPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: passwordListActions.switchOptionPanelVariant', async () => {
                setupAddNewPasswordSpies();
                await passwordListActions.addNewPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    passwordListActions.switchOptionPanelVariant,
                    optionsPanelVariantNames.entityFormCollapsed
                );
            });
        });

        describe('error path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupAddNewPasswordSpies(true);
                await passwordListActions.addNewPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                setupAddNewPasswordSpies(true);
                await passwordListActions.addNewPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.couldNotCreateNewPassword',
                    'error'
                );
            });
        });
    });

    describe('editPassword', () => {
        it('calls action: overlayActions.showGlobalLoader', async () => {
            setupEditPasswordSpies();
            await passwordListActions.editPassword(
                {} as any,
                {
                    label: 'BankAccount',
                    login: 'Tester1234',
                    password: 'TestPassword1234',
                    refId: 'mock_ref_id',
                },
                'master_key'
            );

            expect(storeUtils.callAction).toHaveBeenCalledWith(
                overlayActions.showGlobalLoader
            );
        });

        describe('success path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupEditPasswordSpies();
                await passwordListActions.editPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                        refId: 'mock_ref_id',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: passwordListActions.resetSelectedAndDecryptedEntity', async () => {
                setupEditPasswordSpies();
                await passwordListActions.editPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                        refId: 'mock_ref_id',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    passwordListActions.resetSelectedAndDecryptedEntity
                );
            });

            it('calls action: passwordListActions.switchOptionPanelVariant', async () => {
                setupEditPasswordSpies();
                await passwordListActions.editPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                        refId: 'mock_ref_id',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    passwordListActions.switchOptionPanelVariant,
                    optionsPanelVariantNames.entityFormCollapsed
                );
            });
        });

        describe('error path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupEditPasswordSpies(true);
                await passwordListActions.editPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                        refId: 'mock_ref_id',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                setupEditPasswordSpies(true);
                await passwordListActions.editPassword(
                    {} as any,
                    {
                        label: 'BankAccount',
                        login: 'Tester1234',
                        password: 'TestPassword1234',
                        refId: 'mock_ref_id',
                    },
                    'master_key'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.couldNotEditPassword',
                    'error'
                );
            });
        });
    });

    describe('removePassword', () => {
        it('calls action: overlayActions.showGlobalLoader', async () => {
            setupRemovePasswordSpies();
            await passwordListActions.removePassword({} as any, 'mock_ref_id');

            expect(storeUtils.callAction).toHaveBeenCalledWith(
                overlayActions.showGlobalLoader
            );
        });

        describe('success path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupRemovePasswordSpies();
                await passwordListActions.removePassword(
                    {} as any,
                    'mock_ref_id'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });
        });

        describe('error path', () => {
            it('calls action: overlayActions.hideGlobalLoader', async () => {
                setupRemovePasswordSpies(true);
                await passwordListActions.removePassword(
                    {} as any,
                    'mock_ref_id'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.hideGlobalLoader
                );
            });

            it('calls action: overlayActions.showSnackbar', async () => {
                setupRemovePasswordSpies(true);
                await passwordListActions.removePassword(
                    {} as any,
                    'mock_ref_id'
                );

                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.couldNotRemovePassword',
                    'error'
                );
            });
        });
    });
});
