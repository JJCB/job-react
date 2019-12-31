import * as React from 'react';
import { Link } from 'react-router-dom';

import { Wrapper, Img, Title, SubTitle, Info, Location, Country } from './styled';
import { Shimmer } from 'Component/Shimmer';

interface IProps {
    title: string
    company: string
    city: string
    companySlug: string
    jobSlug: string
    isFetching: boolean
}

export const Jobs: React.FC<IProps> = ({
    title,
    company,
    city,
    companySlug,
    jobSlug,
    isFetching }) => {
    return (
        !isFetching ?
            <Link to={`job/${companySlug}/${jobSlug}`} >
                <Wrapper>
                    <Img src={`https://logo.clearbit.com/${company}.com?size=42`}></Img>
                    <Info>
                        <Title>
                            {title}
                        </Title>
                        <SubTitle>
                            {company}
                        </SubTitle>
                    </Info>
                    <Location>
                        <Country> {city}</Country>
                    </Location>
                </Wrapper>
            </Link> :
            <Wrapper>
                <Shimmer ancho={'10px'}></Shimmer>
                <Info>
                    <Shimmer></Shimmer>
                </Info>
                <Location>
                    <Shimmer></Shimmer>
                </Location>
            </Wrapper>
    )
}