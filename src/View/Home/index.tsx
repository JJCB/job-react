import * as React from 'react';
import { Wrapper } from './styled';
import { ListJobs } from "View/Home/Component/ListJobs";
import { Search } from 'View/Home/Component/Search';
export const Home = () => {
    return(
        <Wrapper>
            <Search></Search>
            <ListJobs></ListJobs>
        </Wrapper>
    )
}