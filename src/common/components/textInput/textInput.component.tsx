import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import { Wrapper } from './textInput.styles';
import PropTypes from 'prop-types';

interface ComponentProps {
    onChange: Function;
    value?: string;
    placeholder?: string;
    hasErrors?: boolean;
}

export const TextInput: TypedComponent<ComponentProps> = ({
    value,
    onChange,
    placeholder,
    hasErrors,
}) => {
    return (
        <Wrapper
            type="text"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            hasErrors={hasErrors}
        />
    );
};

TextInput.propTypes = {
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    hasErrors: PropTypes.bool,
};

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    hasErrors: false,
};
