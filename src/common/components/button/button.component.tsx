import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './button.styles';

export const Button: TypedComponent<ComponentProps> = ({
    children,
    onClick,
}) => {
    return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

interface ComponentProps {
    onClick: Function;
    children: string;
}

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
