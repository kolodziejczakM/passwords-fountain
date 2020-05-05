import {
    createPasswordEntity,
    fetchAllPasswordEntities,
    updatePasswordEntity,
    deletePasswordEntity,
    setupClient,
} from '../database.service';
import faunadb from 'faunadb';

// NOTE: it affects only this file.
jest.mock('faunadb', () => {
    return {
        Client: jest.fn().mockImplementation(() => {
            return {
                query: jest.fn().mockImplementation(() =>
                    Promise.resolve({
                        secret: 'serverSecretMock',
                        data: [
                            { value: { id: 'mockedAdminKeyId' } },
                            { value: { id: 'mockedServerKeyId' } },
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
    });

    describe('fetchAllPasswordEntities', () => {
        it('fetches data via proper index', () => {
            spyOn(faunadb.query, 'Index');
            const client = {
                query: jest
                    .fn()
                    .mockImplementation(() => Promise.resolve({ data: [] })),
            } as any;

            fetchAllPasswordEntities(client);

            expect(faunadb.query.Index).toHaveBeenCalledWith(
                process.env.INDEX_NAME
            );
        });
    });

    describe('createPasswordEntity', () => {
        it('creates entity in proper collection', () => {
            spyOn(faunadb.query, 'Collection');
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
        });
    });

    describe('updatePasswordEntity', () => {
        it('updates entity in proper collection', () => {
            spyOn(faunadb.query, 'Collection');
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
        });
    });

    describe('deletePasswordEntity', () => {
        it('deletes entity in proper collection', () => {
            spyOn(faunadb.query, 'Collection');
            const client = {
                query: jest.fn().mockImplementation(() => Promise.resolve({})),
            } as any;

            deletePasswordEntity(client, 'ref_id_mock');

            expect(faunadb.query.Collection).toHaveBeenCalledWith(
                process.env.COLLECTION_NAME
            );
        });
    });
});
