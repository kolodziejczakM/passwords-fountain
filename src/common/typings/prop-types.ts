import { FunctionComponent } from 'preact';
import PropTypes from 'prop-types';

type Checker<T> = PropTypes.Validator<T>;

type CheckerDictionary<T> = {
    [K in keyof T]?: null extends T[K]
        ? Checker<T[K] | null | undefined>
        : undefined extends T[K]
        ? Checker<T[K] | null | undefined>
        : Checker<T[K]>;
};

export interface TypedComponent<P> extends FunctionComponent<P> {
    propTypes?: CheckerDictionary<P>;
}
