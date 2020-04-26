import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { useSelector } from '@/store';
import {
    Wrapper,
    PasswordEntityWrapper,
    OptionsPanelWrapper,
    Placeholder,
    PlaceholderTextWrapper,
    IconSizer,
} from './passwordList.styles';
import {
    selectIsClientSet,
    selectIsFirstTimeOnDevice,
} from '@/modules/database/database.selectors';
import { route } from 'preact-router';
import { useEffect, useState } from 'preact/hooks';
import { OptionsPanel } from '@/modules/passwordList/components/optionsPanel';
import { selectPasswords } from '@/modules/passwordList/passwordList.selectors';
import { PasswordEntityRaw } from '@/modules/database/database.service';
import { PasswordEntity } from '@/modules/passwordList/components/passwordEntity';
import { useAction } from '@preact-hooks/unistore';
import { passwordListActions } from '@/modules/passwordList/passwordList.actions';
import { optionsPanelVariantNames } from '@/modules/passwordList/passwordList.constants';
import { renderIfTrue } from '@/common/utils/rendering';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/components/text';

export const useFirstTimeRedirection = (): void => {
    useEffect(() => {
        const isFirstTimeOnDevice = useSelector(selectIsFirstTimeOnDevice);

        if (isFirstTimeOnDevice) {
            // User has to be connected to database before accessing /app page
            setTimeout(() => {
                route('/settings');
            });
        }
    }, []);
};

export const PasswordList: TypedComponent<Props> = () => {
    useFirstTimeRedirection();
    const passwords = useSelector(selectPasswords);
    const isClientSet = useSelector(selectIsClientSet);
    const switchOptionsPanelVariant = useAction(
        passwordListActions.switchOptionPanelVariant
    );
    const [
        selectedEntity,
        setSelectedEntity,
    ] = useState<PasswordEntityRaw | null>(null);
    const [promptVisibility, setPromptVisibility] = useState(false);

    useEffect(() => {
        if (isClientSet) {
            switchOptionsPanelVariant(
                optionsPanelVariantNames.entityFormCollapsed
            );
        }
    }, []);

    const renderPasswords = (): VNode[] => {
        return passwords.map(
            (entity: PasswordEntityRaw): VNode => (
                <PasswordEntityWrapper key={entity.ref.id}>
                    <PasswordEntity
                        data={entity}
                        isSelected={selectedEntity === entity}
                        onClick={setSelectedEntity}
                        promptVisibility={promptVisibility}
                        setPromptVisibility={setPromptVisibility}
                    />
                </PasswordEntityWrapper>
            )
        );
    };

    const renderPlaceholder = renderIfTrue(() => (
        <Placeholder>
            <IconSizer>
                <Icon name="padlock" />
            </IconSizer>
            <PlaceholderTextWrapper>
                <Text>passwordList.placeholder</Text>
            </PlaceholderTextWrapper>
        </Placeholder>
    ));

    return (
        <Wrapper>
            <OptionsPanelWrapper>
                <OptionsPanel />
            </OptionsPanelWrapper>
            {renderPasswords()}
            {renderPlaceholder(!isClientSet)}
        </Wrapper>
    );
};

export interface Props {}
