import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, GridWrapper } from './button.styles';

export const Button: TypedComponent<Props> = ({
    type,
    children,
    onClick,
    disabled,
}: Props) => {
    return (
        <Wrapper type={type} onClick={onClick} disabled={disabled}>
            <GridWrapper>{children}</GridWrapper>
        </Wrapper>
    );
};

interface Props {
    type?: string;
    disabled?: boolean;
    onClick: Function;
    children: string | VNode;
}

Button.propTypes = {
    type: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.any.isRequired,
};

Button.defaultProps = {
    type: 'button',
    disabled: false,
};
