import * as React from 'react';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { fetchListJobs } from 'View/Home/State/action';
import * as selectors from "View/Home/State/selectors";
import { Jobs } from "View/Home/Component/Jobs";
import { JobModel } from "View/Home/State/models";
import { Wrapper } from './styled';

interface IFilter {
    type: string
    slug: string
}

interface IProps {
    isFetching: boolean
    fetchListJobs: Function;
    listJobs: Array<JobModel>;
    filter: IFilter;
}

const ListJob: React.FC<IProps> = ({ isFetching, fetchListJobs, listJobs, filter }) => {
    useEffect(() => {
        fetchListJobs(filter)
    }, [filter.type, filter.slug])
    return (
        <Wrapper>
            {
                listJobs.map((item: JobModel) =>
                    <Jobs
                        key={item.id}
                        title={item.title}
                        company={item.company}
                        city={item.city}
                        companySlug={item.slugCompany}
                        jobSlug={item.slug}
                        isFetching={isFetching}
                    />
                )

            }
            {
                isFetching && [1, 2, 3, 4, 5].map((item) =>
                    <Jobs
                        key={item}
                        title={''}
                        company={''}
                        city={''}
                        companySlug={''}
                        jobSlug={''}
                        isFetching={isFetching}
                    />
                )
            }
        </Wrapper>
    )
}

const mapDispatchToProps = (dispatch: any) => ({
    fetchListJobs: (filter) => dispatch(fetchListJobs(filter.type, filter.slug)),
});

const mapStateToProps = (state: any) => ({
    isFetching: selectors.IsFetching(state),
    listJobs: selectors.getListJobs(state),
    filter: selectors.getFilter(state)
});

export const ListJobs = connect(mapStateToProps, mapDispatchToProps)(ListJob);
