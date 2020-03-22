import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Wrapper } from './snackbar.styles';
import { useSelector } from '@preact-hooks/unistore';
import {
    selectSnackbarMessageKey,
    selectSnackbarType,
} from '../../../modules/overlay/overlay.selectors';
import { Icon } from '../icon';

export const Snackbar: TypedComponent<Props> = () => {
    const messageKey = useSelector(selectSnackbarMessageKey);
    const type = useSelector(selectSnackbarType);

    return (
        <Wrapper type={type}>
            {messageKey} {type}
        </Wrapper>
    );
};

interface Props {}
Snackbar.propTypes = forbidExtraProps({});
