import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    TagLineWrapper,
    TagLine,
    Green,
    Blue,
    IconSizer,
} from './banner.styles';
import { Text } from '@/modules/localisation/localisation.context';
import { Icon } from '@/common/components/icon';

export const Banner: TypedComponent<Props> = () => {
    return (
        <Wrapper>
            <TagLineWrapper>
                <TagLine>
                    <Green>
                        <Text>banner.ourInterface</Text>
                    </Green>
                    <Green>&</Green>
                    <Blue>
                        <Text>banner.yourDatabase</Text>
                    </Blue>
                </TagLine>
                <TagLine>
                    <Text>banner.allPasswords</Text>
                </TagLine>
            </TagLineWrapper>
            <IconSizer>
                <Icon name="logoAnimated" />
            </IconSizer>
        </Wrapper>
    );
};

interface Props {}

Banner.propTypes = {};
