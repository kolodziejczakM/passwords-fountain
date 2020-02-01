import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './button.styles';

interface ComponentProps {
    onClick: Function;
    children: string;
}

export const Button: TypedComponent<ComponentProps> = ({
    children,
    onClick,
}) => {
    return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

Button.propTypes = {
    children: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
