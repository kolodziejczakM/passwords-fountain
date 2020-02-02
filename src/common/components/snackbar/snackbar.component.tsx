import { h } from 'preact';
import { TypedComponent } from '../../typings/prop-types';
import { Wrapper } from './snackbar.styles';
import { useSelector } from '@preact-hooks/unistore';
import {
    selectSnackbarMessageKey,
    selectSnackbarType,
} from '../../../modules/overlay/overlay.selectors';

// TODO: continue here
export const Snackbar: TypedComponent<ComponentProps> = () => {
    const messageKey = useSelector(selectSnackbarMessageKey);
    const type = useSelector(selectSnackbarType);

    return (
        <Wrapper>
            {messageKey} {type}
        </Wrapper>
    );
};

interface ComponentProps {}
Snackbar.propTypes = {};
