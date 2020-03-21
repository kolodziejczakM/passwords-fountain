import faunadb, { ClientConfig, Client } from 'faunadb';

enum errors {
    notExistingClient = 'notExistingClient',
}

class FaunaDBService {
    public readonly collectionName = 'passwords';
    public readonly databaseName = 'PASSWORDS_FOUNTAIN';

    private adminClient: Client | null = null;
    private client: Client | null = null;

    private readonly query = faunadb.query;
    private serverKey = { secret: '' };

    public async setClient(options: ClientConfig): Promise<object> {
        this.adminClient = new faunadb.Client(options);

        this.serverKey = await this.adminClient.query(
            this.query.CreateKey({
                database: this.query.Database(this.databaseName),
                role: 'server',
            })
        );

        this.client = new faunadb.Client({ secret: this.serverKey.secret });

        return this.serverKey;
    }

    private async getCollectionRef(): Promise<object | null> {
        try {
            return await this.client!.query(
                this.query.Get(this.query.Collection(this.collectionName))
            );
        } catch (e) {
            return Promise.resolve(null);
        }
    }

    public async createPasswordEntity(
        label: string,
        password: string,
        login: string
    ): Promise<object> {
        if (this.client === null) {
            throw Error(errors.notExistingClient);
        }

        const passwordsCollectionRef:
            | object
            | null = await this.getCollectionRef();

        if (passwordsCollectionRef === null) {
            await this.client.query(
                this.query.CreateCollection({ name: this.collectionName })
            );
        }

        return this.client.query(
            this.query.Create(this.query.Collection(this.collectionName), {
                data: {
                    id: `i-${Date.now()}`,
                    label,
                    password,
                    login,
                },
            })
        );
    }
}

export default new FaunaDBService();
