import database from './database.svg';
import error from './error.svg';
import home from './home.svg';
import info from './info.svg';
import logo from './logo.svg';
import love from './love.svg';
import success from './success.svg';

export type IconName =
    | 'database'
    | 'error'
    | 'home'
    | 'info'
    | 'logo'
    | 'love'
    | 'success';

type Base64orURL = string;

type Icons = {
    [key in IconName]: Base64orURL;
};

export const icons: Icons = {
    database,
    error,
    home,
    info,
    logo,
    love,
    success,
} as const;
