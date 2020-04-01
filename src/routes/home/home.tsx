import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import db from '@/common/services/faunaDB';
import { useLocalisation } from '@/modules/localisation/localisation.context';
import { Button } from '@/common/components/button';
import { TextInput } from '@/common/components/textInput';
import { FormControl } from '@/common/components/formControl';
import { Snackbar } from '@/common/components/snackbar';
import { overlayActions, useAction } from '@/modules/overlay/overlay.model';
import { OptionsPanel } from '@/common/components/optionsPanel';

export const Home: TypedComponent<{}> = () => {
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
                <Button
                    onClick={showSnackbar.bind(
                        null,
                        'passwordCopiedToClipboard',
                        'info'
                    )}
                >
                    Show snackbar with msg key XD and type SUCCESS
                </Button>
                <Button onClick={setCurrentLanguage.bind(null, 'pl')}>
                    Set current language
                </Button>
                <Button onClick={createPasswordEntity}>
                    Create new password
                </Button>
                <TextInput onInput={setCurrentLanguage.bind(null, 'en')} />
                <hr />
                <TextInput
                    value="Testowa wartosc"
                    onInput={setCurrentLanguage.bind(null, 'en')}
                />
                <hr />
                <TextInput
                    placeholder="xd"
                    onInput={setCurrentLanguage.bind(null, 'en')}
                />
                <hr />
                <TextInput
                    value="To jest test"
                    onInput={setCurrentLanguage.bind(null, 'en')}
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
                            onInput={setCurrentLanguage.bind(null, 'en')}
                        />
                    )}
                    renderError={() => <div>Error</div>}
                />
                <OptionsPanel />
                <Snackbar />
            </section>
        </div>
    );
};
