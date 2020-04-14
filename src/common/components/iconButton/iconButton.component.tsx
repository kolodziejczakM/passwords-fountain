import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './iconButton.styles';
import { Icon } from '@/common/components/icon';
import { IconName } from '@/assets/icons';

export const IconButton: TypedComponent<Props> = ({
    iconName,
    width,
    height,
}: Props) => {
    return (
        <Wrapper>
            <Icon name={iconName} width={width} height={height} />
        </Wrapper>
    );
};

interface Props {
    iconName: IconName;
    width?: number;
    height?: number;
}

IconButton.propTypes = {
    iconName: PropTypes.any.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};

IconButton.defaultProps = {
    width: 30,
    height: 30,
};
