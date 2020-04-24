import database from './database.svg';
import error from './error.svg';
import info from './info.svg';
import logo from './logo.svg';
import logoAnimated from './logoAnimated.svg';
import love from './love.svg';
import success from './success.svg';
import bin from './bin.svg';
import globe from './globe.svg';
import eye from './eye.svg';
import eyeFilled from './eyeFilled.svg';
import padlock from './padlock.svg';

export type IconName =
    | 'database'
    | 'error'
    | 'info'
    | 'logo'
    | 'logoAnimated'
    | 'love'
    | 'success'
    | 'bin'
    | 'globe'
    | 'eye'
    | 'eyeFilled'
    | 'padlock';

type Base64orURL = string;

type Icons = {
    [key in IconName]: Base64orURL;
};

export const icons: Icons = {
    database,
    error,
    info,
    logo,
    logoAnimated,
    love,
    success,
    bin,
    globe,
    eye,
    eyeFilled,
    padlock,
} as const;
