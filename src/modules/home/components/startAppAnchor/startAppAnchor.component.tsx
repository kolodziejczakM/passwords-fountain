import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './startAppAnchor.styles';
import { Text } from '@/modules/localisation/components/text';

export const StartAppAnchor: TypedComponent<Props> = () => {
    return (
        <Wrapper href="/app">
            <Text>home.startApp</Text>
        </Wrapper>
    );
};

interface Props {}

StartAppAnchor.propTypes = {};
