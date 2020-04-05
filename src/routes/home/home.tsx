import { h } from 'preact';
import { TypedComponent } from '@/common/typings/prop-types';
import { Wrapper, Paragraph } from './home.styles';
import { Banner } from '@/modules/home/components/banner';
import { Segment } from '@/modules/home/components/segment';
import { Text } from '@/modules/localisation/localisation.context';

export const Home: TypedComponent<{}> = () => {
    // TODO: add polish translations
    return (
        <Wrapper>
            <Banner />
            <Segment title="home.howToStart">
                <Paragraph>
                    <Text withMarkup>home.toStart</Text>
                </Paragraph>
                <Paragraph>
                    <Text withMarkup>home.followGuide</Text>
                </Paragraph>
            </Segment>
            <Segment title="home.pricing">
                <span>hehe</span>
            </Segment>
            <Segment title="home.authors">
                <span>hehe</span>
            </Segment>
        </Wrapper>
    );
};
