import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Route } from 'wouter-preact';
import { Home } from '@/routes/home/home';
import { Settings } from '@/routes/settings/settings';
import { PasswordList } from '@/routes/passwordList/passwordList';
import { Wrapper, PageWrapper } from './app.styles';
import { NavBar } from '@/common/components/navBar';

export const App: TypedComponent<Props> = () => {
    return (
        <Wrapper>
            <header>
                <NavBar />
            </header>
            <PageWrapper>
                <Route path="/" component={Home} />
                <Route path="/settings" component={Settings} />
                <Route path="/app" component={PasswordList} />
            </PageWrapper>
        </Wrapper>
    );
};

interface Props {}

App.propTypes = forbidExtraProps({});
