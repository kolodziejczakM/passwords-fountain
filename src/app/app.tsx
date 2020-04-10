import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import Router from 'preact-router';
import AsyncRoute from 'preact-async-route';
import { Home } from '@/routes/home/home';
import { Props as SettingsProps } from '@/routes/settings/settings';
import { Props as PasswordListProps } from '@/routes/passwordList/passwordList';
import { Wrapper, PageWrapper, Header } from './app.styles';
import { NavBar } from '@/common/components/navBar';
import { Footer } from '@/common/components/footer';
import { Snackbar } from '@/modules/overlay/components/snackbar';
import { useSelector } from '@preact-hooks/unistore';
import { selectIsSnackbarVisible } from '@/modules/overlay/overlay.selectors';
import { renderIfTrue } from '@/common/utils/rendering';

export const App: TypedComponent<Props> = () => {
    const isSnackbarVisible = useSelector(selectIsSnackbarVisible);
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
        </Wrapper>
    );
};

interface Props {}

App.propTypes = {};
