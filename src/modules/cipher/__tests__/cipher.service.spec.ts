import { encrypt, decrypt } from '../cipher.service';
import * as storeUtils from '../../../common/utils/store';
import { overlayActions } from '../../overlay/overlay.actions';

describe('Cipher service', () => {
    describe('encrypt', () => {
        describe('when withJSONStringify argument is untruthful', () => {
            it('encrypts vulnerable text with secret key', () => {
                const vulnerableText = 'My name is Marcin';
                const secretPassphrase = 'secret';

                expect(encrypt(vulnerableText, secretPassphrase)).not.toBe(
                    vulnerableText
                );
            });
        });

        describe('when withJSONStringify argument is truthful', () => {
            it('encrypts vulnerable object with secret key', () => {
                const vulnerableData = {
                    login: 'tester',
                    password: 'p4ssw0rD1',
                };

                const secretPassphrase = 'secret';

                expect(
                    encrypt(vulnerableData, secretPassphrase, true)
                ).not.toEqual(vulnerableData);
            });
        });
    });

    describe('decrypt', () => {
        describe('when withJSONStringify argument is untruthful', () => {
            it('decrypts vulnerable text with secret key', () => {
                const vulnerableText = 'My name is Marcin';
                const secretPassphrase = 'secret';
                const encrypted = encrypt(vulnerableText, secretPassphrase);

                expect(decrypt(encrypted, secretPassphrase)).toBe(
                    vulnerableText
                );
            });
        });

        describe('when withJSONStringify argument is truthful', () => {
            it('decrypts vulnerable object with secret key', () => {
                const vulnerableData = {
                    login: 'tester',
                    password: 'p4ssw0rD1',
                };
                const secretPassphrase = 'secret';
                const encrypted = encrypt(
                    vulnerableData,
                    secretPassphrase,
                    true
                );

                expect(decrypt(encrypted, secretPassphrase, true)).toEqual(
                    vulnerableData
                );
            });
        });

        it('calls snackbar error action when decryption is disrupted', () => {
            jest.spyOn(storeUtils, 'callAction');
            const vulnerableData = {
                login: 'tester',
                password: 'p4ssw0rD1',
            };
            const secretPassphrase = 'secret';
            const encrypted = encrypt(vulnerableData, secretPassphrase, true);

            try {
                decrypt(encrypted, 'passphrase', true); // wrong passphrase
            } catch (err) {
                expect(storeUtils.callAction).toHaveBeenCalledWith(
                    overlayActions.showSnackbar,
                    'snackbar.decryptionError',
                    'error'
                );
            }
            jest.restoreAllMocks();
        });
    });
});
