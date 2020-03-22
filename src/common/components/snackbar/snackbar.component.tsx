import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import {
    Wrapper,
    IconWrapper,
    TextWrapper,
    ErrorType,
} from './snackbar.styles';
import { useSelector } from '@preact-hooks/unistore';
import {
    selectSnackbarMessageKey,
    selectSnackbarType,
} from '@/modules/overlay/overlay.selectors';
import { SnackbarType } from '@/modules/overlay/overlay.constants';
import { Icon } from '../icon';
import { Text } from '@/modules/localisation/localisation.context';

export const Snackbar: TypedComponent<Props> = () => {
    const messageKey = useSelector(selectSnackbarMessageKey);
    const type = useSelector(selectSnackbarType) as SnackbarType;
    const iconSize = 44;

    return (
        <Wrapper type={type}>
            <IconWrapper>
                <Icon name={type} width={iconSize} height={iconSize} />
            </IconWrapper>
            <TextWrapper>
                <ErrorType>
                    <Text>{type}</Text>
                </ErrorType>
                <span>{' - '}</span>
                <Text>{messageKey}</Text>
            </TextWrapper>
        </Wrapper>
    );
};

interface Props {}
Snackbar.propTypes = forbidExtraProps({});
