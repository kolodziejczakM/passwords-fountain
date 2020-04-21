import AES from 'crypto-js/aes';
import UTF8 from 'crypto-js/enc-utf8';
import { PasswordEntity } from '../database/database.service';

type Modifier = (vulnerable: string, secretPassphrase: string) => string;

export const encode: Modifier = (
    vulnerable: string,
    secretPassphrase: string
): string => {
    return AES.encrypt(vulnerable, secretPassphrase).toString();
};

export const decode: Modifier = (
    vulnerableHashed: string,
    secretPassphrase: string
): string => {
    return AES.decrypt(vulnerableHashed, secretPassphrase).toString(UTF8);
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
