import { h } from 'preact';
import PropTypes from 'prop-types';
import { TypedComponent } from '../../typings/prop-types';
import { Wrapper } from './icon.styles';

import database from '../../../static/icons/database.svg';
import error from '../../../static/icons/error.svg';
import home from '../../../static/icons/home.svg';
import info from '../../../static/icons/info.svg';
import logo from '../../../static/icons/logo.svg';
import love from '../../../static/icons/love.svg';
import success from '../../../static/icons/success.svg';

const icons: { [key: string]: string } = {
    database,
    error,
    home,
    info,
    logo,
    love,
    success,
} as const;

export const Icon: TypedComponent<ComponentProps> = ({
    name,
    width = 100,
    height = 100,
}: ComponentProps) => {
    return <Wrapper src={icons[name]} width={width} height={height} />;
};

interface ComponentProps {
    name: string;
    width?: number;
    height?: number;
}

Icon.propTypes = {
    name: PropTypes.string.isRequired,
    width: PropTypes.number,
    height: PropTypes.number,
};
