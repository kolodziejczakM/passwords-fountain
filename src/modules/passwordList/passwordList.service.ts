import { decrypt } from '@/modules/cipher/cipher.service';
import {
    PasswordEntity,
    PasswordEntityPayload,
    PasswordEntityRaw,
} from '@/modules/database/database.service';

// TODO: check if really needed
const normalizePasswordEntities = (
    rawPasswordList: PasswordEntityRaw[],
    masterKey: string
): PasswordEntity[] => {
    return rawPasswordList.map(
        (entity: PasswordEntityRaw): PasswordEntity => {
            const decryptedEntity = decrypt(
                entity.data.value,
                masterKey,
                true
            ) as PasswordEntityPayload;

            return {
                refId: entity.ref.id,
                createdAt: String(entity.ts),
                label: decryptedEntity.label,
                password: decryptedEntity.password,
                login: decryptedEntity.login,
            };
        }
    );
};
