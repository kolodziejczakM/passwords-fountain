import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { TypedComponent } from '../../common/typings/prop-types';
import db from '../../common/services/faunaDB';
import {
    useLocalisation,
    Text,
} from '../../modules/localisation/localisation.context';

export const Home: TypedComponent<{}> = () => {
    const [limit, setLimit] = useState(2);
    const [data] = useState([]);
    const [, setCurrentLanguage] = useLocalisation();

    useEffect(() => {
        setTimeout(() => {
            setCurrentLanguage('pl');
        }, 3000);
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
                <h1>{<Text>description</Text>}</h1>
            </section>
            <section>
                <button onClick={setCurrentLanguage.bind(null, 'en')}>
                    Set current language
                </button>
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
