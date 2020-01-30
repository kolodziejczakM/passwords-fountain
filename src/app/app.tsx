import { h, VNode } from 'preact';
import { Link, Route } from 'wouter-preact';
import { TypedComponent } from '../common/typings/prop-types';
import { Home } from '../routes/home/home';
import { AboutMe } from '../routes/aboutMe/aboutMe';
import { Wrapper } from './app.styles';

interface ComponentProps {
    description: VNode<string>;
}

export const App: TypedComponent<ComponentProps> = ({
    description,
}: ComponentProps) => {
    return (
        <Wrapper>
            <h1>{description}</h1>
            <header>
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
