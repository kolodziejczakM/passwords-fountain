import { h } from 'preact';
import { useState } from 'preact/hooks';
import { TypedComponent } from '@/common/typings/prop-types';
import db from '@/common/services/faunaDB';
import {
    useLocalisation,
    Text,
} from '@/modules/localisation/localisation.context';
import { Button } from '@/common/components/button';
import { TextInput } from '@/common/components/textInput';
import { FormControl } from '@/common/components/formControl';
import { Snackbar } from '@/common/components/snackbar';
import { useAction } from '@preact-hooks/unistore';
import { overlayActions } from '@/modules/overlay/overlay.model';

export const Home: TypedComponent<{}> = () => {
    const [, setLimit] = useState(2);
    const [data] = useState([]);
    const [, setCurrentLanguage] = useLocalisation();
    const showSnackbar = useAction(overlayActions.showSnackbar);

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
                <Button onClick={showSnackbar.bind(null, 'XD', 'SUCCESS')}>
                    Show snackbar with msg key XD and type SUCCESS
                </Button>
                <Button onClick={setCurrentLanguage.bind(null, 'en')}>
                    Set current language
                </Button>
                <Button onClick={createPasswordEntity}>
                    Create new password
                </Button>
                <Button
                    onClick={(): void => {
                        setLimit(limit => limit + 2);
                    }}
                >
                    Load more
                </Button>
                <TextInput onChange={setCurrentLanguage.bind(null, 'en')} />
                <hr />
                <TextInput
                    value="Testowa wartosc"
                    onChange={setCurrentLanguage.bind(null, 'en')}
                />
                <hr />
                <TextInput
                    placeholder="xd"
                    onChange={setCurrentLanguage.bind(null, 'en')}
                />
                <hr />
                <TextInput
                    value="To jest test"
                    onChange={setCurrentLanguage.bind(null, 'en')}
                    hasError
                />
                <hr />
                <FormControl
                    hasError
                    renderLabel={() => 'Labelka'}
                    renderInput={() => (
                        <TextInput
                            hasError
                            value="Form input"
                            onChange={setCurrentLanguage.bind(null, 'en')}
                        />
                    )}
                    renderError={() => <div>Error</div>}
                />
                <Snackbar />
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
