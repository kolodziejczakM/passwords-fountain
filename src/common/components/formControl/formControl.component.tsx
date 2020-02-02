import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import PropTypes from 'prop-types';
import {
    Wrapper,
    LabelWrapper,
    InputWrapper,
    ErrorWrapper,
} from './formControl.styles';

export const FormControl: TypedComponent<ComponentProps> = ({
    hasError,
    renderLabel,
    renderInput,
    renderError,
}) => {
    return (
        <Wrapper>
            <LabelWrapper>{renderLabel()}</LabelWrapper>
            <InputWrapper>{renderInput()}</InputWrapper>
            {hasError && <ErrorWrapper>{renderError()}</ErrorWrapper>}
        </Wrapper>
    );
};

interface ComponentProps {
    hasError: string | boolean;
    renderInput: Function;
    renderLabel: Function;
    renderError: Function;
}

FormControl.propTypes = {
    hasError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
        .isRequired,
    renderLabel: PropTypes.func.isRequired,
    renderInput: PropTypes.func.isRequired,
    renderError: PropTypes.func.isRequired,
};
