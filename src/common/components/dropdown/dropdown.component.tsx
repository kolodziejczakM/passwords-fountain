import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { useState } from 'preact/hooks';
import PropTypes from 'prop-types';
import {
    Wrapper,
    OptionListWrapper,
    OptionList,
    Option,
    SelectedOptionWrapper,
    ExpansionIcon,
} from './dropdown.styles';
import { renderIfTrue } from '@/common/utils/rendering';

export interface DropdownOption {
    id: string | number | symbol;
    label: string;
    value: string | number | symbol | object | Array<any> | null;
}

interface InitialDropdownOption extends DropdownOption {
    value: symbol;
}

const initialOption: InitialDropdownOption = {
    id: 'initial',
    label: 'dropdown.choose',
    value: Symbol('PLACEHOLDER_VALUE'),
};

export const Dropdown: TypedComponent<Props> = ({
    renderSelectedOption,
    renderOptionList,
    renderExpandIcon,
}: Props) => {
    const [expanded, setExpansion] = useState(false);
    const [selectedOption, setSelectedOption] = useState<DropdownOption>(
        initialOption
    );

    const onOptionClick = (option: DropdownOption): void => {
        setSelectedOption(option);
        setExpansion(false);
    };

    const renderOptions = () => {
        return renderIfTrue(() =>
            renderOptionList(
                Option,
                onOptionClick,
                selectedOption,
                initialOption
            )
        )(expanded);
    };

    const onOptionSelection = (): void => {
        setExpansion(prevState => !prevState);
    };

    const renderExpansionIcon = (): VNode => {
        if (renderExpandIcon) {
            return renderExpandIcon();
        }

        return <ExpansionIcon />;
    };

    return (
        <Wrapper tabindex={0} onblur={onOptionSelection}>
            <SelectedOptionWrapper onClick={onOptionSelection}>
                {renderSelectedOption(selectedOption, initialOption)}
                {renderExpansionIcon()}
            </SelectedOptionWrapper>
            <OptionListWrapper>
                <OptionList>{renderOptions()}</OptionList>
            </OptionListWrapper>
        </Wrapper>
    );
};

// TODO: try to update goober.js, check their altered typings and specify "any"
interface Props {
    renderOptionList: (
        OptionComponent: any,
        onOptionClick: (...args: any[]) => void,
        selectedOption: DropdownOption,
        initialOption: InitialDropdownOption
    ) => VNode[];
    renderSelectedOption: (
        selectedOption: DropdownOption,
        initialOption: DropdownOption
    ) => VNode;
    renderExpandIcon?: () => VNode;
}

Dropdown.propTypes = {
    renderOptionList: PropTypes.func.isRequired,
    renderSelectedOption: PropTypes.func.isRequired,
    renderExpandIcon: PropTypes.func,
};
