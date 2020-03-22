import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import {
    Wrapper,
    LabelWrapper,
    InputWrapper,
    ErrorWrapper,
} from './formControl.styles';

export const FormControl: TypedComponent<Props> = ({
    hasError,
    renderLabel,
    renderInput,
    renderError,
}: Props) => {
    return (
        <Wrapper>
            <LabelWrapper>{renderLabel()}</LabelWrapper>
            <InputWrapper>{renderInput()}</InputWrapper>
            {hasError && <ErrorWrapper>{renderError()}</ErrorWrapper>}
        </Wrapper>
    );
};

interface Props {
    hasError: string | boolean;
    renderInput: Function;
    renderLabel: Function;
    renderError: Function;
}

FormControl.propTypes = forbidExtraProps({
    hasError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool])
        .isRequired,
    renderLabel: PropTypes.func.isRequired,
    renderInput: PropTypes.func.isRequired,
    renderError: PropTypes.func.isRequired,
});
