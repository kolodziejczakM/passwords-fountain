import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper } from './footer.styles';
import { Text } from '@/modules/localisation/components/text';

export const Footer: TypedComponent<Props> = () => {
    return (
        <Wrapper>
            <Text>footer.createdBy</Text>
        </Wrapper>
    );
};

interface Props {}

Footer.propTypes = {};
