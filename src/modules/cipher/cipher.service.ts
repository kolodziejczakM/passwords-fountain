import CryptoJS from 'crypto-js';
import { PasswordEntity } from '../database/database.service';

type Modifier = (vulnerable: string, secretPassphrase: string) => string;

export const encode: Modifier = (
    vulnerable: string,
    secretPassphrase: string
): string => {
    return CryptoJS.AES.encrypt(vulnerable, secretPassphrase).toString();
};

export const decode: Modifier = (
    vulnerableHashed: string,
    secretPassphrase: string
): string => {
    return CryptoJS.AES.decrypt(vulnerableHashed, secretPassphrase).toString(
        CryptoJS.enc.Utf8
    );
};

const modifyEntity = (
    entity: PasswordEntity,
    secretPassphrase: string,
    modifier: Modifier
): PasswordEntity => {
    return Object.fromEntries(
        Object.entries(entity).map(
            ([key, value]: [string, string]): string[] => {
                return [
                    modifier(key, secretPassphrase),
                    modifier(value, secretPassphrase),
                ];
            }
        )
    );
};

export const encodeEntity = (
    entity: PasswordEntity,
    secretPassphrase: string
): PasswordEntity => {
    return modifyEntity(entity, secretPassphrase, encode);
};

export const decodeEntity = (
    entity: PasswordEntity,
    secretPassphrase: string
): PasswordEntity => {
    return modifyEntity(entity, secretPassphrase, decode);
};
