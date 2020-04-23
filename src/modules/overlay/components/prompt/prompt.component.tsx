import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, ContentWrapper, ControlsWrapper } from './prompt.styles';

export const Prompt: TypedComponent<Props> = ({
    renderContent,
    renderControls,
}: Props) => {
    return (
        <Wrapper onClick={(e: Event) => e.stopPropagation()}>
            <ContentWrapper>{renderContent()}</ContentWrapper>
            <ControlsWrapper>{renderControls()}</ControlsWrapper>
        </Wrapper>
    );
};

interface Props {
    renderContent: () => VNode | string;
    renderControls: () => VNode;
}

Prompt.propTypes = {
    renderContent: PropTypes.func.isRequired,
    renderControls: PropTypes.func.isRequired,
};
