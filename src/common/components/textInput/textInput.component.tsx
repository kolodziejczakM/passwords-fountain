import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './textInput.styles';
import { errorIdentifierPrefix } from '@/common/components/formControl/formControl.component';

export const TextInput: TypedComponent<Props> = ({
    value,
    onInput,
    placeholder,
    hasError,
    name,
    type,
    id,
    ref,
    autofocus,
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
            autofocus={autofocus}
            {...ariaProps}
        />
    );
};

interface Props extends Partial<HTMLInputElement> {
    type?: 'text' | 'password';
    onInput: Function;
    hasError?: boolean;
    ref?: any;
}

TextInput.propTypes = {
    onInput: PropTypes.func.isRequired,
    hasError: PropTypes.bool,
};

TextInput.defaultProps = {
    type: 'text',
    hasError: false,
};
