import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './textInput.styles';

export const TextInput: TypedComponent<Props> = ({
    value,
    onInput,
    placeholder,
    hasError,
    name,
    type,
}: Props) => {
    return (
        <Wrapper
            type={type}
            value={value}
            onInput={onInput}
            placeholder={placeholder}
            hasError={hasError}
            name={name}
        />
    );
};

interface Props {
    onInput: Function;
    value?: string;
    placeholder?: string;
    hasError?: boolean;
    name?: string;
    type?: string;
}

TextInput.propTypes = {
    onInput: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
    name: PropTypes.string,
    type: PropTypes.string,
};

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    hasError: false,
    name: '',
    type: 'text',
};
