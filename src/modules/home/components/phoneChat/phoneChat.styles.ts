import { h } from 'preact';
import { styled, setPragma } from 'goober';
import { theme, typography, stylelint } from '@/common/theme';
setPragma(h);

export const Wrapper = styled('section')`
    position: relative;
    background: #221e1f;
    border: 5px solid #4b473f;
    min-height: 600px;
    width: 100%;
    max-width: 340px;
    border-radius: 30px;
    overflow: hidden;
`;

export const Screen = styled('div')`
    display: grid;
    margin: 40px 0 5px 5px;
    grid-auto-rows: minmax(min-content, max-content);
    border-radius: 0 0 30px 30px;
    width: calc(100% - 10px);
    padding: ${theme.spacing.s12};
    background: ${theme.colors.white};
`;

const getVariantProperties = ({ isRight }: { isRight: boolean }): string => {
    if (isRight) {
        return stylelint.css`
            justify-self: start;
            background: ${theme.colors.pastelGreen};
        `;
    }

    return stylelint.css`
        justify-self: end;
        background: ${theme.colors.pastelBlue};
    `;
};

export const ChatCloud = styled('div')`
    ${getVariantProperties}
    ${typography.text16}
    width: 90%;
    color: ${theme.colors.darkBlue};
    position: relative;
    border-radius: 15px;
    margin-bottom: 15px;
    padding: 10px;
    line-height: ${theme.lineHeights.s23};

    span {
        color: ${theme.colors.darkBlue};
    }
`;

export const Avatar = styled('img')`
    object-fit: contain;
    position: absolute;
    z-index: ${theme.zIndexes.xs};
    top: 20%;
    ${({ isRight }: { isRight: boolean }) =>
        isRight ? 'right: -34px;' : 'left: -34px;'}
    width: 30px;
    height: 30px;
    border-radius: 50%;
`;

export const Camera = styled('div')`
    position: absolute;
    top: 17px;
    left: 25px;
    height: 10px;
    width: 10px;
    background: #585858;
    border-radius: 10px;
`;

export const CameraLens = styled('div')`
    position: absolute;
    top: 20px;
    left: 28px;
    height: 5px;
    width: 5px;
    background: #0d0d0d;
    border-radius: 5px;
`;

export const Speaker = styled('div')`
    position: absolute;
    top: 17px;
    left: 50%;
    transform: translateX(-50%);
    height: 5px;
    width: 50px;
    background: #574b4d;
    border-radius: 3px;
`;
