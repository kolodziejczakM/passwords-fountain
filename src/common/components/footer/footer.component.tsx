import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper, SocialLink } from './footer.styles';
import { Text } from '@/modules/localisation/components/text';
import { Icon } from '@/common/components/icon';

export const Footer: TypedComponent<Props> = () => {
    const iconSize = 30;
    return (
        <Wrapper>
            <Text>footer.createdBy</Text>
            <SocialLink href="https://github.com/kolodziejczakM">
                <Icon name="github" width={iconSize} height={iconSize} />
            </SocialLink>
            <SocialLink href="https://twitter.com/kolodziejczakMn">
                <Icon name="twitter" width={iconSize} height={iconSize} />
            </SocialLink>
        </Wrapper>
    );
};

interface Props {}

Footer.propTypes = {};
