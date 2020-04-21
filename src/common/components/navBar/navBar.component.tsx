import { h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import {
    Wrapper,
    LogoWrapper,
    AppName,
    Green,
    Blue,
    LinksWrapper,
    LinkAnchor,
    LanguageSelectorWrapper,
    LogoAnchor,
} from './navBar.styles';
import { Icon } from '@/common/components/icon';
import { Text } from '@/modules/localisation/components/text';
import { LanguageSelector } from '@/modules/localisation/components/languageSelector';
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
    const isOnHomepage = location.pathname.length === 1;

    const renderNavLinks = renderIfTrue((): VNode[] => {
        return navLinks.map(navLink => (
            <LinkAnchor key={navLink.id} href={navLink.href} native>
                <Text>{navLink.label}</Text>
            </LinkAnchor>
        ));
    });

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
            <LanguageSelectorWrapper>
                <LanguageSelector />
            </LanguageSelectorWrapper>
        </Wrapper>
    );
};

interface Props {}

NavBar.propTypes = {};
