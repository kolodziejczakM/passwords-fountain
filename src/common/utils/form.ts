import { RefObject } from 'preact';
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
