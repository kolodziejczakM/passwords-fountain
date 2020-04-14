import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, MessageTextWrapper, ControlsWrapper } from './prompt.styles';

export const Prompt: TypedComponent<Props> = ({
    renderMessage,
    renderControls,
}: Props) => {
    return (
        <Wrapper>
            <MessageTextWrapper>{renderMessage()}</MessageTextWrapper>
            <ControlsWrapper>{renderControls()}</ControlsWrapper>
        </Wrapper>
    );
};

interface Props {
    renderMessage: () => VNode | string;
    renderControls: () => VNode;
}

Prompt.propTypes = {
    renderMessage: PropTypes.func.isRequired,
    renderControls: PropTypes.func.isRequired,
};
