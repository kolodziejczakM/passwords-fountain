import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, TitleBar, Title, ContentWrapper } from './segment.styles';
import { Text } from '@/modules/localisation/localisation.context';

export const Segment: TypedComponent<Props> = ({ title, children }: Props) => {
    return (
        <Wrapper>
            <TitleBar>
                <Title>
                    <Text>{title}</Text>
                </Title>
            </TitleBar>
            <ContentWrapper>{children}</ContentWrapper>
        </Wrapper>
    );
};

interface Props {
    title: string;
    children: VNode | VNode[];
}

Segment.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};
