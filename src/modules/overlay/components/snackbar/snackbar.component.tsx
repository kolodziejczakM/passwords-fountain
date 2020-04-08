import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    IconWrapper,
    TextWrapper,
    ErrorType,
} from './snackbar.styles';
import {
    useSelector,
    selectSnackbarMessageKey,
    selectSnackbarType,
} from '@/modules/overlay/overlay.selectors';
import { SnackbarType } from '@/modules/overlay/overlay.constants';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/components/text';

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
Snackbar.propTypes = {};
