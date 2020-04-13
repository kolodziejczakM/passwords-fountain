import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper } from './dropdown.styles';

export const Dropdown: TypedComponent<Props> = () => {
    return <Wrapper />;
};

interface Props {}

Dropdown.propTypes = {};
