import * as React from 'react';
import { Wrapper, Span, Company, Title, Location, City } from './styled';

interface IProps {
    company: string
    title: string
    city: string
}
export const Header: React.SFC<IProps>  = ({ company, title, city }) => {
    return (
        <Wrapper>
            <Span>
                <Company>{company}</Company> hiring a
            </Span>
            <Title>
                {title}
            </Title>
            <Location>
                <City>
                    {city}
                </City>
            </Location>
        </Wrapper>
    )
}