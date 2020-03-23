import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Route } from 'wouter-preact';
import { Home } from '@/routes/home/home';
import { AboutMe } from '@/routes/aboutMe/aboutMe';
import { Wrapper } from './app.styles';
import { NavBar } from '@/common/components/navBar';

export const App: TypedComponent<Props> = () => {
    return (
        <Wrapper>
            <header>
                <NavBar />
            </header>
            <main>
                <Route path="/" component={Home} />
                <Route path="/about-me" component={AboutMe} />
            </main>
        </Wrapper>
    );
};

interface Props {}

App.propTypes = forbidExtraProps({});
