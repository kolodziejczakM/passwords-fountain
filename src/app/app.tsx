import { h, VNode } from 'preact';
import { TypedComponent } from '../common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Link, Route } from 'wouter-preact';
import { Home } from '../routes/home/home';
import { AboutMe } from '../routes/aboutMe/aboutMe';
import { Wrapper } from './app.styles';
import { Icon } from '../common/components/icon';

export const App: TypedComponent<Props> = ({ description }: Props) => {
    return (
        <Wrapper>
            <h1>{description}</h1>
            <header>
                <Icon name="logo" width={200} height={200} />
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about-me">
                    <a>About me</a>
                </Link>
            </header>
            <main>
                <Route path="/" component={Home} />
                <Route path="/about-me" component={AboutMe} />
            </main>
        </Wrapper>
    );
};

interface Props {
    description: VNode<string>;
}

App.propTypes = forbidExtraProps({
    description: PropTypes.any.isRequired,
});
