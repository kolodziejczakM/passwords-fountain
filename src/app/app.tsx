import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Route } from 'wouter-preact';
import { Home } from '@/routes/home/home';
import { Settings } from '@/routes/settings/settings';
import { PasswordList } from '@/routes/passwordList/passwordList';
import { Wrapper, PageWrapper, Header } from './app.styles';
import { NavBar } from '@/common/components/navBar';
import { Footer } from '@/common/components/footer';

export const App: TypedComponent<Props> = () => {
    return (
        <Wrapper>
            <Header>
                <NavBar />
            </Header>
            <PageWrapper>
                <Route path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/app" component={PasswordList} />
            </PageWrapper>
            <Footer />
        </Wrapper>
    );
};

interface Props {}

App.propTypes = {};
