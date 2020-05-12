import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './textInput.styles';
import { errorIdentifierPrefix } from '@/common/components/formControl/formControl.component';

export const TextInput: TypedComponent<Props> = ({
    onInput,
    hasError,
    value,
    placeholder,
    name,
    type,
    id,
    ref,
}: Props) => {
    const ariaProps = {
        'aria-invalid': hasError,
        ...(id !== undefined && {
            'aria-describedby': `${id}-${errorIdentifierPrefix}`,
        }),
    };

    return (
        <Wrapper
            ref={ref}
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            onInput={onInput}
            hasError={hasError}
            {...ariaProps}
        />
    );
};

interface Props extends Partial<HTMLInputElement> {
    onInput: Function;
    hasError?: boolean;
    type?: 'text' | 'password';
    ref?: any;
}

TextInput.propTypes = {
    onInput: PropTypes.func.isRequired,
    hasError: PropTypes.bool,
};

TextInput.defaultProps = {
    hasError: false,
    type: 'text',
};
