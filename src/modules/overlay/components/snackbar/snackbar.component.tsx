import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    IconWrapper,
    TextWrapper,
    ErrorType,
} from './snackbar.styles';
import { useSelector, useAction } from '@/store';
import { snackbarVisibilityTime } from '@/modules/overlay/overlay.constants';
import { selectSnackbarMessages } from '@/modules/overlay/overlay.selectors';
import { overlayActions } from '@/modules/overlay/overlay.actions';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/components/text';
import { useEffect } from 'preact/hooks';

export const Snackbar: TypedComponent<Props> = () => {
    const iconSize = 44;
    const [currentMessage] = useSelector(selectSnackbarMessages);
    const hideSnackbar = useAction(overlayActions.hideSnackbar);

    useEffect(() => {
        setTimeout(() => {
            hideSnackbar(currentMessage.id);
        }, snackbarVisibilityTime);
    }, [currentMessage]);

    return (
        <Wrapper type={currentMessage.type}>
            <IconWrapper>
                <Icon
                    name={currentMessage.type}
                    width={iconSize}
                    height={iconSize}
                />
            </IconWrapper>
            <TextWrapper>
                <ErrorType>
                    <Text>{currentMessage.type}</Text>
                </ErrorType>
                <span>{' - '}</span>
                <Text>{currentMessage.messageKey}</Text>
            </TextWrapper>
        </Wrapper>
    );
};

interface Props {}
Snackbar.propTypes = {};
