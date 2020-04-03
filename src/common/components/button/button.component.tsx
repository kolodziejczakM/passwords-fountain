import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './button.styles';

export const Button: TypedComponent<Props> = ({
    children,
    onClick,
    disabled,
}: Props) => {
    return (
        <Wrapper type="button" onClick={onClick} disabled={disabled}>
            {children}
        </Wrapper>
    );
};

interface Props {
    disabled?: boolean;
    onClick: Function;
    children: string | VNode;
}

Button.propTypes = {
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
};

Button.defaultProps = {
    disabled: false,
};
