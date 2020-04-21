import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { useSelector } from '@/store';
import {
    Wrapper,
    PasswordEntityWrapper,
    OptionsPanelWrapper,
} from './passwordList.styles';
import { selectIsFirstTimeOnDevice } from '@/modules/database/database.selectors';
import { route } from 'preact-router';
import { useEffect } from 'preact/hooks';
import { OptionsPanel } from '@/modules/passwordList/components/optionsPanel';
import { selectPasswords } from '@/modules/passwordList/passwordList.selectors';
import { PasswordEntity as IPasswordEntity } from '@/modules/database/database.service';
import { PasswordEntity } from '@/modules/passwordList/components/passwordEntity';

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
    const renderPasswords = (): VNode[] => {
        return passwords.map(
            (entity: IPasswordEntity): VNode => (
                <PasswordEntityWrapper key={entity.refId}>
                    <PasswordEntity data={entity} />
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
