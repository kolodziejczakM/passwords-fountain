import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './loader.styles';

export const Loader: TypedComponent<{}> = () => {
    return (
        <Wrapper>
            <div />
            <div />
        </Wrapper>
    );
};
