import {
    createPasswordEntity,
    fetchAllPasswordEntities,
    updatePasswordEntity,
    deletePasswordEntity,
    setupClient,
} from '../database.service';
import { unusedServerKeyRefIdLocalStorageKeyName } from '../database.constants';
import faunadb from 'faunadb';

// NOTE: it affects only this file.
jest.mock('faunadb', () => {
    return {
        Client: jest.fn().mockImplementation(() => {
            return {
                query: jest.fn().mockImplementation(() =>
                    Promise.resolve({
                        ref: { id: 'serverKeyRefIdMock' },
                        secret: 'serverSecretMock',
                        data: [
                            { value: { id: 'mockedRefId_1' } },
                            { value: { id: 'mockedRefId_2' } },
                        ],
                    })
                ),
            };
        }),
        query: {
            CreateKey: () => ({}), // jest doesn't allow to use variables within mock's scope
            CreateCollection: () => ({}),
            CreateIndex: () => ({}),
            Collection: () => ({}),
            Collections: () => ({}),
            Index: () => ({}),
            Indexes: () => ({}),
            Paginate: () => ({}),
            Delete: () => ({}),
            Ref: () => ({}),
            Keys: () => ({}),
            Var: () => ({}),
            Get: () => ({}),
            Match: () => ({}),
            Lambda: () => ({}),
            Map: () => ({}),
            Create: () => ({}),
            Update: () => ({}),
        },
    };
});

describe('Database service', () => {
    describe('setupClient', () => {
        it('creates usable database client', async () => {
            const client = await setupClient({ secret: 'xd' });
            expect(client).toEqual(
                expect.objectContaining({
                    query: expect.any(Function),
                })
            );
        });

        it('stores created server key ref id into localStorage', async () => {
            jest.spyOn(localStorage.__proto__, 'setItem');

            await setupClient({ secret: 'xd' });

            expect(localStorage.setItem).toHaveBeenCalledWith(
                unusedServerKeyRefIdLocalStorageKeyName,
                'serverKeyRefIdMock'
            );
            jest.restoreAllMocks();
        });
    });

    describe('fetchAllPasswordEntities', () => {
        it('fetches data via proper index', () => {
            jest.spyOn(faunadb.query, 'Index');
            const client = {
                query: jest
                    .fn()
                    .mockImplementation(() => Promise.resolve({ data: [] })),
            } as any;

            fetchAllPasswordEntities(client);

            expect(faunadb.query.Index).toHaveBeenCalledWith(
                process.env.INDEX_NAME
            );
            jest.restoreAllMocks();
        });
    });

    describe('createPasswordEntity', () => {
        it('creates entity in proper collection', () => {
            jest.spyOn(faunadb.query, 'Collection');
            const client = {
                query: jest.fn().mockImplementation(() => Promise.resolve({})),
            } as any;

            createPasswordEntity(client, {
                label: 'Bank account',
                value: 'encrypted_login_and_password',
            });

            expect(faunadb.query.Collection).toHaveBeenCalledWith(
                process.env.COLLECTION_NAME
            );
            jest.restoreAllMocks();
        });
    });

    describe('updatePasswordEntity', () => {
        it('updates entity in proper collection', () => {
            jest.spyOn(faunadb.query, 'Collection');
            const client = {
                query: jest.fn().mockImplementation(() => Promise.resolve({})),
            } as any;

            updatePasswordEntity(client, 'ref_id_mock', {
                label: 'Bank account',
                value: 'encrypted_login_and_password',
            });

            expect(faunadb.query.Collection).toHaveBeenCalledWith(
                process.env.COLLECTION_NAME
            );
            jest.restoreAllMocks();
        });
    });

    describe('deletePasswordEntity', () => {
        it('deletes entity in proper collection', () => {
            jest.spyOn(faunadb.query, 'Collection');
            const client = {
                query: jest.fn().mockImplementation(() => Promise.resolve({})),
            } as any;

            deletePasswordEntity(client, 'ref_id_mock');

            expect(faunadb.query.Collection).toHaveBeenCalledWith(
                process.env.COLLECTION_NAME
            );
            jest.restoreAllMocks();
        });
    });
});
