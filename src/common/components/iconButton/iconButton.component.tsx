import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './iconButton.styles';
import { Icon } from '@/common/components/icon';
import { IconName } from '@/assets/icons';
import { GridWrapper } from '@/common/components/button/button.styles';

export const IconButton: TypedComponent<Props> = ({
    iconName,
    width,
    height,
    onClick,
}: Props) => {
    return (
        <Wrapper onClick={onClick}>
            <GridWrapper>
                <Icon name={iconName} width={width} height={height} />
            </GridWrapper>
        </Wrapper>
    );
};

interface Props {
    iconName: IconName;
    onClick: Function;
    width?: number;
    height?: number;
}

IconButton.propTypes = {
    iconName: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

IconButton.defaultProps = {
    width: 30,
    height: 30,
};
