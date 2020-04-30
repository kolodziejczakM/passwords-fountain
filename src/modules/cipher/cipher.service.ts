import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import { PasswordEntityVulnerablePayload } from '@/modules/passwordList/passwordList.constants';
import { callAction } from '@/common/utils/store';
import { overlayActions } from '@/modules/overlay/overlay.actions';

export const encrypt = (
    vulnerable: string | PasswordEntityVulnerablePayload,
    masterKey: string,
    withJSONStringify = false
): string => {
    const data = withJSONStringify
        ? JSON.stringify(vulnerable)
        : (vulnerable as string);

    return AES.encrypt(data, masterKey).toString();
};

export const decrypt = (
    vulnerableHashed: string,
    masterKey: string,
    withJSONParsing = false
): string | PasswordEntityVulnerablePayload => {
    try {
        const decrypted = AES.decrypt(vulnerableHashed, masterKey).toString(
            UTF8
        );

        return withJSONParsing ? JSON.parse(decrypted) : decrypted;
    } catch (err) {
        callAction(
            overlayActions.showSnackbar,
            'snackbar.decryptionError',
            'error'
        );
        throw err;
    }
};
