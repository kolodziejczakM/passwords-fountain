import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import { PasswordEntityVulnerablePayload } from '../database/database.service';

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
    const decrypted = AES.decrypt(vulnerableHashed, masterKey).toString(UTF8);

    return withJSONParsing ? JSON.parse(decrypted) : decrypted;
};
