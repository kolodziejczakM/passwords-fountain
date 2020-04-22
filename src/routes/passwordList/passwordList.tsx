import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { useSelector } from '@/store';
import {
    Wrapper,
    PasswordEntityWrapper,
    OptionsPanelWrapper,
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
import { variantNames } from '@/modules/passwordList/passwordList.contants';

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

    useEffect(() => {
        if (isClientSet) {
            switchOptionsPanelVariant(variantNames.entityFormCollapsed);
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
                    />
                </PasswordEntityWrapper>
            )
        );
    };

    return (
        <Wrapper>
            <OptionsPanelWrapper>
                <OptionsPanel />
            </OptionsPanelWrapper>
            {renderPasswords()}
        </Wrapper>
    );
};

export interface Props {}
