import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import { Wrapper } from './textInput.styles';
import PropTypes from 'prop-types';

interface ComponentProps {
    onChange: Function;
    value?: string;
    placeholder?: string;
    hasError?: boolean;
}

export const TextInput: TypedComponent<ComponentProps> = ({
    value,
    onChange,
    placeholder,
    hasError,
}) => {
    return (
        <Wrapper
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            hasError={hasError}
        />
    );
};

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
};

TextInput.defaultProps = {
    value: '',
    placeholder: undefined,
    hasError: false,
};
