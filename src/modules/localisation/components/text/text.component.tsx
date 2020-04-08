import { Fragment, h, VNode } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import PropTypes from 'prop-types';
import { useContext } from 'preact/hooks';
import DOMPurify from 'dompurify';
import i18n from '@/modules/localisation/i18n';
import { LocalisationContext } from '@/modules/localisation/localisation.context';

export const Text: TypedComponent<Props> = ({
    children,
    withMarkup,
}: Props): VNode<string> => {
    useContext(LocalisationContext);

    return withMarkup ? (
        <span
            className="sanitized-translation"
            dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(i18n._(children)),
            }}
        />
    ) : (
        <Fragment>{i18n._(children)}</Fragment>
    );
};

interface Props {
    children: string;
    withMarkup?: boolean;
}

Text.propTypes = {
    children: PropTypes.string.isRequired,
    withMarkup: PropTypes.bool,
};

Text.defaultProps = {
    withMarkup: false,
};
