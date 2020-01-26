import { h } from 'preact';
import { Link, Route } from 'wouter-preact';
import { TypedComponent } from '../shared/typings/prop-types';
import { actions, StoreState } from '../store';
import { useAction, useSelector } from '@preact-hooks/unistore';
import { Home } from '../routes/home/home';
import { AboutMe } from '../routes/aboutMe/aboutMe';
import { Wrapper } from './app.styles';

interface ComponentProps {
    description: string;
}

export const App: TypedComponent<ComponentProps> = ({
    description,
}: ComponentProps) => {
    const increment = useAction(actions.increment);
    const count = useSelector((state: StoreState) => state.count);

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
            <section>
                <h1>Testing store</h1>
                <section>
                    (see redux-dev-tools): <strong>{count}</strong>
                </section>
                <button onClick={increment}>Increment</button>
                <hr />
            </section>
            <main>
                <Route path="/" component={Home} />
                <Route path="/about-me" component={AboutMe} />
            </main>
        </Wrapper>
    );
};
