import { RefObject } from 'preact';
import { useState } from 'preact/hooks';
import { validate } from 'formee';

type InputEventHandler = (event: Event) => void;

export const validateInputField = (
    fieldName: string,
    formRef: RefObject<HTMLFormElement>,
    formValidation: { [key: string]: (val: string) => boolean | string },
    valueSetter: (val: string) => void,
    errorSetter: (errorMsg: string) => void
): InputEventHandler => (event: Event): void => {
    const errors: { [key: string]: any } = validate(
        formRef.current as HTMLFormElement,
        formValidation
    );
    const value = (event.target as HTMLInputElement).value;
    const defaultValue = '';

    valueSetter(value ?? defaultValue);
    errorSetter(errors[fieldName] ?? defaultValue);
};

export interface FormTextInputState {
    value: string;
    setValue: (value: string) => void;
    errors: string;
    setErrors: (value: string) => void;
}

export interface FormTextInputProps {
    name: string;
    value: string;
    hasError: boolean;
    onInput: Function;
}

export const useInputFormControl = (
    formRef: RefObject<HTMLFormElement>,
    formValidation: { [key: string]: (val: string) => boolean | string },
    fieldName: string,
    defaultValue = ''
): [FormTextInputState, FormTextInputProps] => {
    const [value, setValue] = useState(defaultValue);
    const [errors, setErrors] = useState('');

    return [
        { value, setValue, errors, setErrors },
        {
            name: fieldName,
            value,
            hasError: Boolean(errors),
            onInput: validateInputField(
                fieldName,
                formRef,
                formValidation,
                setValue,
                setErrors
            ),
        },
    ];
};
