import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { Wrapper, Row, Label, Value } from './passwordEntity.styles';
import { Text } from '@/modules/localisation/components/text';
import { PasswordEntity as IPasswordEntity } from '@/modules/database/database.service';

export const PasswordEntity: TypedComponent<Props> = ({ data }: Props) => {
    return (
        <Wrapper>
            <Row>
                <Label>
                    <Text>passwordEntity.label</Text>
                </Label>{' '}
                - <Value>{data.label}</Value>
            </Row>
            <Row>
                <Label>
                    <Text>passwordEntity.login</Text>
                </Label>{' '}
                - <Value>{data.login}</Value>
            </Row>
            <Row>
                <Label>
                    <Text>passwordEntity.password</Text>
                </Label>{' '}
                - <Value>{data.password}</Value>
            </Row>
        </Wrapper>
    );
};

interface Props {
    data: IPasswordEntity;
}

PasswordEntity.propTypes = {
    data: PropTypes.any.isRequired,
};
