import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import { Wrapper } from './loader.styles';

interface ComponentProps {}

export const Loader: TypedComponent<ComponentProps> = () => {
    return (
        <Wrapper>
            <div />
            <div />
        </Wrapper>
    );
};
