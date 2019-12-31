import * as React from 'react';
import { Wrapper, Info, Aside, Item, Title, Span } from './styled';
import * as ReactMarkdown from 'react-markdown/with-html'
import { Shimmer } from 'Component/Shimmer';


interface IProps {
    isFetching: boolean
    city: string
    commitment: string
    description: string
}
export const Body: React.SFC<IProps> = ({ description, city, commitment, isFetching }) => {
    return (
        !isFetching ?
            <Wrapper>
                <Info>
                    <ReactMarkdown
                        source={`${description}`}
                        escapeHtml={false}
                    />
                </Info>
                <Aside>
                    <Item>
                        <Title>Location</Title>
                        <Span>{city}</Span>
                    </Item>
                    <Item>
                        <Title>Commitment</Title>
                        <Span>{commitment}</Span>
                    </Item>
                </Aside>
            </Wrapper>
            : <Wrapper>
                <Info>
                    <Shimmer width="500px" />
                    <Shimmer width="200px" />
                    <Shimmer />
                    <Shimmer />
                </Info>
                <Aside>
                    <Item>
                        <Title>Location</Title>
                        <Shimmer />
                    </Item>
                    <Item>
                        <Title>Commitment</Title>
                        <Shimmer />
                    </Item>
                </Aside>
            </Wrapper>
    )
}