import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, TitleBar, Title, ContentWrapper } from './segment.styles';
import { Text } from '@/modules/localisation/localisation.context';

export const Segment: TypedComponent<Props> = ({
    id,
    title,
    children,
}: Props) => {
    const rootProps = id ? { id } : {};

    return (
        <Wrapper {...rootProps}>
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
    id?: string;
    title: string;
    children: VNode | VNode[];
}

Segment.propTypes = {
    id: PropTypes.string,
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,
};
