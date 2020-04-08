import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    Camera,
    CameraLens,
    Speaker,
    Screen,
    ChatCloud,
    Avatar,
} from './phoneChat.styles';
import she from '@/assets/images/she.webp';
import he from '@/assets/images/he.webp';
import { Text } from '@/modules/localisation/components/text';

export const PhoneChat: TypedComponent<Props> = () => {
    return (
        <Wrapper>
            <Camera />
            <CameraLens />
            <Speaker />
            <Screen>
                <ChatCloud>
                    <Text>phoneChat.soAnotherAccount</Text>
                    <Avatar src={she} alt="avatar" />
                </ChatCloud>
                <ChatCloud isRight>
                    <Text>phoneChat.dontYouUse</Text>
                    <Avatar src={he} alt="avatar" isRight />
                </ChatCloud>
                <ChatCloud>
                    <Text>phoneChat.iTried</Text>
                    <Avatar src={she} alt="avatar" />
                </ChatCloud>
                <ChatCloud>
                    <Text>phoneChat.usually</Text>
                    <Avatar src={she} alt="avatar" />
                </ChatCloud>
                <ChatCloud isRight>
                    <Text withMarkup>phoneChat.tryThen</Text>
                    <Avatar src={he} alt="avatar" isRight />
                </ChatCloud>
                <ChatCloud isRight>
                    <Text>phoneChat.itEncodes</Text>
                    <Avatar src={he} alt="avatar" isRight />
                </ChatCloud>
            </Screen>
        </Wrapper>
    );
};

interface Props {}

PhoneChat.propTypes = {};
