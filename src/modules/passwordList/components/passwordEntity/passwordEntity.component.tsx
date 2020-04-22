import { h, Fragment } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import {
    Wrapper,
    GridWrapper,
    Row,
    Label,
    Value,
    DataWrapper,
    ControlsWrapper,
} from './passwordEntity.styles';
import { Text } from '@/modules/localisation/components/text';
import { placeholderEntityValue } from '@/modules/passwordList/passwordList.contants';
import { useState } from 'preact/hooks';
import { PasswordEntityRaw } from '@/modules/database/database.service';
import { IconButton } from '@/common/components/iconButton';
import { renderIfTrue } from '@/common/utils/rendering';

export const PasswordEntity: TypedComponent<Props> = ({
    data,
    isSelected,
    onClick,
}: Props) => {
    const [entity, setEntity] = useState({
        label: placeholderEntityValue,
        login: placeholderEntityValue,
        password: placeholderEntityValue,
    });

    const renderEyeIcon = () => {
        // if (false) {
        //     <IconButton iconName="eyeFilled" onClick={() => {}} />;
        // }
        return (
            <IconButton
                iconName="eye"
                onClick={(e: any): void => {
                    e.stopPropagation();
                }}
            />
        );
    };

    const renderControls = renderIfTrue(() => {
        return (
            <Fragment>
                <IconButton
                    iconName="bin"
                    onClick={(e: any): void => {
                        e.stopPropagation();
                    }}
                />
                {renderEyeIcon()}
            </Fragment>
        );
    });

    const handleClick = (): void => {
        onClick(isSelected ? null : data);
    };

    return (
        <Wrapper onClick={handleClick} isSelected={isSelected}>
            <GridWrapper>
                <DataWrapper>
                    <Row>
                        <Label>
                            <Text>passwordEntity.label</Text>
                        </Label>{' '}
                        - <Value>{entity.label}</Value>
                    </Row>
                    <Row>
                        <Label>
                            <Text>passwordEntity.login</Text>
                        </Label>{' '}
                        - <Value>{entity.login}</Value>
                    </Row>
                    <Row>
                        <Label>
                            <Text>passwordEntity.password</Text>
                        </Label>{' '}
                        - <Value>{entity.password}</Value>
                    </Row>
                </DataWrapper>
                <ControlsWrapper>{renderControls(isSelected)}</ControlsWrapper>
            </GridWrapper>
        </Wrapper>
    );
};

interface Props {
    isSelected: boolean;
    data: PasswordEntityRaw;
    onClick: Function;
}

PasswordEntity.propTypes = {
    isSelected: PropTypes.bool.isRequired,
    data: PropTypes.any.isRequired,
    onClick: PropTypes.func.isRequired,
};
