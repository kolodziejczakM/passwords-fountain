import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { forbidExtraProps } from 'airbnb-prop-types';
import { Link } from 'wouter-preact';
import {
    Wrapper,
    LogoWrapper,
    AppName,
    Green,
    Blue,
    LinksWrapper,
    LinkAnchor,
} from './navBar.styles';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/localisation.context';

interface NavLink {
    id: number;
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    {
        id: 0,
        label: 'navBar.howToStart',
        href: '#how-to-start',
    },
    {
        id: 1,
        label: 'navBar.pricing',
        href: '#pricing',
    },
    {
        id: 2,
        label: 'navBar.authors',
        href: '#authors',
    },
];

export const NavBar: TypedComponent<Props> = () => {
    const iconSize = 40;

    const renderNavLinks = (): VNode[] => {
        return navLinks.map(navLink => (
            <Link key={navLink.id} href={navLink.href}>
                <LinkAnchor>
                    <Text>{navLink.label}</Text>
                </LinkAnchor>
            </Link>
        ));
    };

    return (
        <Wrapper>
            <LogoWrapper>
                <Icon name="logo" width={iconSize} height={iconSize} />
                <AppName>
                    <Green>Passwords</Green>
                    <Blue>Fountain</Blue>
                </AppName>
            </LogoWrapper>
            <LinksWrapper>{renderNavLinks()}</LinksWrapper>
        </Wrapper>
    );
};

interface Props {}

NavBar.propTypes = forbidExtraProps({});
