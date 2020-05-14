import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './startAppAnchor.styles';
import { Text } from '@/modules/localisation/components/text';
import { useSelector } from '@preact-hooks/unistore';
import { selectIsFirstTimeOnDevice } from '@/modules/database/database.selectors';

export const StartAppAnchor: TypedComponent<Props> = () => {
    const destinationPath = useSelector(selectIsFirstTimeOnDevice)
        ? '/settings'
        : '/app';

    return (
        <Wrapper href={destinationPath}>
            <Text>home.startApp</Text> &#9658;
        </Wrapper>
    );
};

interface Props {}

StartAppAnchor.propTypes = {};
