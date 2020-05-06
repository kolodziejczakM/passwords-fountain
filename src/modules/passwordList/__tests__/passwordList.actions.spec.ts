import { passwordListActions } from '../passwordList.actions';
import * as databaseService from '@/modules/database/database.service';
import * as storeUtils from '@/common/utils/store';
import { overlayActions } from '../../overlay/overlay.actions';
import { databaseActions } from '../../database/database.actions';
import { optionsPanelVariantNames } from '../passwordList.constants';

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
            jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
            jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
            jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
            jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
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
                jest.restoreAllMocks();
            });
        });
    });
});
