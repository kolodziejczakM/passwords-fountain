import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { useLocation } from 'wouter-preact';
import {
    Wrapper,
    LogoWrapper,
    AppName,
    Green,
    Blue,
    LinksWrapper,
    LinkAnchor,
    AppLinkWrapper,
    AppLinkAnchor,
    LogoAnchor,
} from './navBar.styles';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/components/text';
import { renderIfTrue } from '@/common/utils/rendering';

interface NavLink {
    id: number;
    label: string;
    href: string;
}

const navLinks: NavLink[] = [
    {
        id: 0,
        label: 'navBar.howItWorks',
        href: '#how-it-works',
    },
    {
        id: 1,
        label: 'navBar.howToStart',
        href: '#how-to-start',
    },
    {
        id: 2,
        label: 'navBar.pricing',
        href: '#pricing',
    },
];

export const NavBar: TypedComponent<Props> = () => {
    const logoIconSize = 40;
    const [location] = useLocation();
    const isOnHomepage = location.length === 1;
    const appLink: NavLink = {
        id: 3,
        label: 'navBar.app',
        href: isOnHomepage ? '/app' : '/',
    };

    const renderNavLinks = renderIfTrue((): VNode[] => {
        return navLinks.map(navLink => (
            <LinkAnchor key={navLink.id} href={navLink.href} native>
                <Text>{navLink.label}</Text>
            </LinkAnchor>
        ));
    });

    const renderAppLinkLabel = () => {
        return isOnHomepage ? (
            <Text>{appLink.label}</Text>
        ) : (
            <Icon name="home" width={32} height={32} />
        );
    };

    return (
        <Wrapper>
            <LogoWrapper>
                <LogoAnchor href="/">
                    <Icon
                        name="logo"
                        width={logoIconSize}
                        height={logoIconSize}
                    />
                    <AppName>
                        <Green>Passwords</Green>
                        <Blue>Fountain</Blue>
                    </AppName>
                </LogoAnchor>
            </LogoWrapper>
            <LinksWrapper withoutPadding={!isOnHomepage}>
                {renderNavLinks(isOnHomepage)}
            </LinksWrapper>
            <AppLinkWrapper>
                <AppLinkAnchor href={appLink.href}>
                    {renderAppLinkLabel()}
                </AppLinkAnchor>
            </AppLinkWrapper>
        </Wrapper>
    );
};

interface Props {}

NavBar.propTypes = {};
