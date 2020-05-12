import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import {
    Wrapper,
    LabelWrapper,
    InputWrapper,
    ErrorWrapper,
} from './formControl.styles';

export const errorIdentifierPrefix = 'error-message';

export const FormControl: TypedComponent<Props> = ({
    id,
    hasError,
    renderLabel,
    renderInput,
    renderError,
}: Props) => {
    return (
        <Wrapper>
            <LabelWrapper htmlFor={id}>{renderLabel(id)}</LabelWrapper>
            <InputWrapper>{renderInput(id)}</InputWrapper>
            {hasError && (
                <ErrorWrapper
                    id={`${id}-${errorIdentifierPrefix}`}
                    aria-role="alert"
                >
                    {renderError(id)}
                </ErrorWrapper>
            )}
        </Wrapper>
    );
};

interface Props {
    id: string;
    hasError: string | boolean;
    renderInput: Function;
    renderLabel: Function;
    renderError: Function;
}

FormControl.propTypes = {
    id: PropTypes.string.isRequired,
    hasError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
        .isRequired,
    renderLabel: PropTypes.func.isRequired,
    renderInput: PropTypes.func.isRequired,
    renderError: PropTypes.func.isRequired,
};
