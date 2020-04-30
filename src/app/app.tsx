import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { Home } from '@/routes/home/home';
import { Props as SettingsProps } from '@/routes/settings/settings';
import { Props as PasswordListProps } from '@/routes/passwordList/passwordList';
import { Wrapper, PageWrapper, Header, LoaderWrapper } from './app.styles';
import { NavBar } from '@/common/components/navBar';
import { Footer } from '@/common/components/footer';
import { Snackbar } from '@/modules/overlay/components/snackbar';
import { Loader } from '@/modules/overlay/components/loader';
import { useSelector, useAction } from '@/store';
import {
    selectIsSnackbarVisible,
    selectIsGlobalLoaderVisible,
} from '@/modules/overlay/overlay.selectors';
import { renderIfTrue } from '@/common/utils/rendering';
import { useEffect } from 'preact/hooks';
import { overlayActions } from '@/modules/overlay/overlay.actions';

export const App: TypedComponent<Props> = () => {
    const isSnackbarVisible = useSelector(selectIsSnackbarVisible);
    const isLoaderVisible = useSelector(selectIsGlobalLoaderVisible);
    const showSnackbar = useAction(overlayActions.showSnackbar);
    const onOffline = (): void => {
        showSnackbar('snackbar.noInternetConnection', 'info');
    };
    const onOnline = (): void => {
        showSnackbar('snackbar.internetIsBack', 'info');
    };

    useEffect(() => {
        window.addEventListener('offline', onOffline);
        window.addEventListener('online', onOnline);

        return (): void => {
            window.removeEventListener('offline', onOffline);
            window.removeEventListener('online', onOnline);
        };
    }, []);

    return (
        <Wrapper>
            <Header>
                <NavBar />
            </Header>
            <PageWrapper>
                <Router>
                    <Home path="/" />
                    <AsyncRoute
                        path="/settings"
                        getComponent={(): Promise<
                            TypedComponent<SettingsProps>
                        > =>
                            import('@/routes/settings/settings').then(
                                module => module.Settings
                            )
                        }
                    />
                    <AsyncRoute
                        path="/app"
                        getComponent={(): Promise<
                            TypedComponent<PasswordListProps>
                        > =>
                            import('@/routes/passwordList/passwordList').then(
                                module => module.PasswordList
                            )
                        }
                    />
                </Router>
            </PageWrapper>
            <Footer />
            {renderIfTrue(() => <Snackbar />)(isSnackbarVisible)}
            {renderIfTrue(() => (
                <LoaderWrapper>
                    <Loader />
                </LoaderWrapper>
            ))(isLoaderVisible)}
        </Wrapper>
    );
};

interface Props {}

App.propTypes = {};
