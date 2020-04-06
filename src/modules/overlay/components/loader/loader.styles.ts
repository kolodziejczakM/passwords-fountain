import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme } from '@/common/theme';
setPragma(h);

const animation = `@keyframes ripple {
    0% {
        top: 36px;
        left: 36px;
        width: 0;
        height: 0;
        opacity: 1;
    }

    100% {
        top: 0;
        left: 0;
        width: 72px;
        height: 72px;
        opacity: 0;
    }
}`;

export const Wrapper = styled('div')`
    ${animation}
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;

    div {
        position: absolute;
        border: 4px solid ${theme.colors.primaryBlue};
        opacity: 1;
        border-radius: 50%;
        animation: ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
    }

    div:nth-child(2) {
        animation-delay: -0.5s;
    }
`;
