import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, Row, Label, Value } from './passwordEntity.styles';
import { Text } from '@/modules/localisation/localisation.context';

export const PasswordEntity: TypedComponent<Props> = ({
    label,
    login,
    password,
}: Props) => {
    return (
        <Wrapper>
            <Row>
                <Label>
                    <Text>passwordEntity.label</Text>
                </Label>{' '}
                - <Value>{label}</Value>
            </Row>
            <Row>
                <Label>
                    <Text>passwordEntity.login</Text>
                </Label>{' '}
                - <Value>{login}</Value>
            </Row>
            <Row>
                <Label>
                    <Text>passwordEntity.password</Text>
                </Label>{' '}
                - <Value>{password}</Value>
            </Row>
        </Wrapper>
    );
};

interface Props {
    label: string;
    login: string;
    password: string;
}

PasswordEntity.propTypes = {
    label: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
};
