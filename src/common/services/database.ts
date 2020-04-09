import faunadb, { ClientConfig, Client } from 'faunadb';

const { query } = faunadb;
const collectionName = process.env.COLLECTION_NAME as string;
const indexName = process.env.INDEX_NAME as string;
let client: Client | null = null;

interface PasswordListRaw {
    data: PasswordEntityRaw[];
}

interface PasswordEntityRaw {
    ref: { id: string; value: { id: string } };
    ts: number;
    data: PasswordEntityPayload;
}

interface PasswordEntityPayload {
    label: string;
    password: string;
    login: string;
}

interface PasswordEntity {
    refId: string;
    createdAt: number;
    label: string;
    password: string;
    login: string;
}

const hasCollections = async (): Promise<boolean> => {
    const collections: { data: object[] } = await client!.query(
        query.Paginate(query.Collections())
    );

    return Boolean(collections.data.length);
};

const hasAllPasswordsIndex = async (): Promise<boolean> => {
    const indexes: { data: object[] } = await client!.query(
        query.Paginate(query.Indexes())
    );

    return Boolean(indexes.data.length);
};

const normalizePasswordEntities = (
    rawPasswordList: PasswordListRaw
): PasswordEntity[] => {
    return rawPasswordList.data.map(
        (entity: PasswordEntityRaw): PasswordEntity => {
            return {
                refId: entity.ref.id,
                createdAt: entity.ts,
                label: entity.data.label,
                password: entity.data.password,
                login: entity.data.login,
            };
        }
    );
};

export const setupClient = async (options: ClientConfig): Promise<void> => {
    const adminClient = new faunadb.Client(options);
    const serverKey: { secret: string } = await adminClient.query(
        query.CreateKey({ role: 'server' })
    );

    client = new faunadb.Client({ secret: serverKey.secret });

    if (!(await hasCollections())) {
        await client.query(query.CreateCollection({ name: collectionName }));
    }

    if (!(await hasAllPasswordsIndex())) {
        await client.query(
            query.CreateIndex({
                name: indexName,
                source: query.Collection(collectionName),
            })
        );
    }
};

export const fetchAllPasswordEntities = async (): Promise<PasswordEntity[]> => {
    const paramName = 'placeholderValue';
    const response: PasswordListRaw = await client!.query(
        query.Map(
            query.Paginate(query.Match(query.Index(indexName))),
            query.Lambda(paramName, query.Get(query.Var(paramName)))
        )
    );

    return normalizePasswordEntities(response);
};

export const createPasswordEntity = async (
    label: string,
    password: string,
    login: string
): Promise<void> => {
    await client!.query(
        query.Create(query.Collection(collectionName), {
            data: {
                label,
                password,
                login,
            },
        })
    );
};

export const updatePasswordEntity = async (
    refId: string,
    updatedFields: Partial<PasswordEntityPayload>
): Promise<void> => {
    await client!.query(
        query.Update(query.Ref(query.Collection(collectionName), refId), {
            data: updatedFields,
        })
    );
};

export const deletePasswordEntity = async (refId: string): Promise<void> => {
    await client!.query(
        query.Delete(query.Ref(query.Collection(collectionName), refId))
    );
};
