import * as React from 'react';
import { Header } from './Component/Header';
import { Body } from './Component/Body';
import { connect } from 'react-redux';
import { fetchAdvertisement } from './State/action';
import { useEffect } from 'react';
import * as selectors from "./State/selectors";
import { Redirect, useParams } from 'react-router-dom';
import { AdvertisementModel } from './State/models';

interface IProps {
    isError: boolean
    isFetching: boolean
    fetchAdvertisement: Function;
    advertisement: AdvertisementModel
}

const AdvertisementComponent: React.FC<IProps> = ({
    isFetching,
    isError,
    fetchAdvertisement,
    advertisement }) => {

    const { companySlug, jobSlug } = useParams()

    useEffect(() => {
        fetchAdvertisement(companySlug, jobSlug)
    }, [])

    return (
        <>  {isError && <Redirect to='/' />}
            <Header
                company={advertisement.company}
                city={advertisement.city}
                title={advertisement.title}
            />

            <Body
                isFetching={isFetching}
                commitment={advertisement.commitment}
                description={advertisement.description}
                city={advertisement.city}
            />
        </>
    )
}
const mapDispatchToProps = (dispatch: any) => ({
    fetchAdvertisement: (companySlug, jobSlug) => dispatch(fetchAdvertisement(companySlug, jobSlug)),
});

const mapStateToProps = (state: any) => ({
    advertisement: selectors.getAdvertisement(state),
    isFetching: selectors.isFetching(state),
    isError: selectors.isError(state),
});

export const Advertisement = connect(mapStateToProps, mapDispatchToProps)(AdvertisementComponent);
