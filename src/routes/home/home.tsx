import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { TypedComponent } from '../../shared/typings/prop-types';
import db from '../../shared/services/faunaDB';

export const Home: TypedComponent<{}> = () => {
    const [limit, setLimit] = useState(2);
    const [data, setData] = useState([]);
    useEffect(() => {
        setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/photos?_limit=${limit}`)
                .then(res => res.json())
                .then(data => {
                    setData(data);
                });
        }, 2000);
    }, [limit]);

    const createPasswordEntity = (): void => {
        const secret = 'USER_ADMIN_KEY';

        db.setClient({ secret }).then(() => {
            db.createPasswordEntity('MojBank', 'passWord1234', '');
        });
    };

    return (
        <div>
            <section>
                <h1>Testing pre-rendering</h1>
            </section>
            <section>
                <button onClick={createPasswordEntity}>
                    Create new password
                </button>
                <button
                    onClick={(): void => {
                        setLimit(limit => limit + 2);
                    }}
                >
                    Load more
                </button>
            </section>
            <div>
                {data.map((photo: { thumbnailUrl: string; title: string }) => (
                    <figure key={photo.thumbnailUrl}>
                        <img src={photo.thumbnailUrl} alt={photo.title} />
                        <figcaption>{photo.title}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    );
};
