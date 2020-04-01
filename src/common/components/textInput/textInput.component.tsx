import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './textInput.styles';

export const TextInput: TypedComponent<Props> = ({
    value,
    onInput,
    placeholder,
    hasError,
    name,
}: Props) => {
    return (
        <Wrapper
            type="text"
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
}

TextInput.propTypes = forbidExtraProps({
    onInput: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
    name: PropTypes.string,
});

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    hasError: false,
    name: '',
};
