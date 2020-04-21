import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import { PasswordEntity } from '../database/database.service';

type Cipher = (vulnerable: string, secretPassphrase: string) => string;

export const encrypt: Cipher = (
    vulnerable: string | PasswordEntity,
    secretPassphrase: string
): string => {
    return AES.encrypt(JSON.stringify(vulnerable), secretPassphrase).toString();
};

export const decrypt: Cipher = (
    vulnerableHashed: string,
    secretPassphrase: string,
    withJSONParsing = false
): string => {
    const decrypted = AES.decrypt(vulnerableHashed, secretPassphrase).toString(
        UTF8
    );

    return withJSONParsing ? JSON.parse(decrypted) : decrypted;
};
