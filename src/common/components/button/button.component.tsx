import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './button.styles';

export const Button: TypedComponent<Props> = ({ children, onClick }: Props) => {
    return <Wrapper onClick={onClick}>{children}</Wrapper>;
};

interface Props {
    onClick: Function;
    children: string | VNode;
}

Button.propTypes = forbidExtraProps({
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
});
