import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './textInput.styles';

export const TextInput: TypedComponent<Props> = ({
    value,
    onChange,
    placeholder,
    hasError,
}: Props) => {
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

interface Props {
    onChange: Function;
    value?: string;
    placeholder?: string;
    hasError?: boolean;
}

TextInput.propTypes = forbidExtraProps({
    onChange: PropTypes.func.isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    hasError: PropTypes.bool,
});

TextInput.defaultProps = {
    value: '',
    placeholder: '',
    hasError: false,
};
