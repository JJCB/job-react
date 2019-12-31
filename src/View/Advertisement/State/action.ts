import { Dispatch } from 'redux';
import { AdvertisementService } from './services';
import * as actionType from './actionTypes';
import { hydrator } from './hydrators';

const fetchAdvertisementRequest = () => ({
  type: actionType.FETCH_ADVERTISEMENT_REQUEST
});
const fetchAdvertisementFailure = () => ({
  type: actionType.FETCH_ADVERTISEMENT_FAILURE
});
const fetchAdvertisementSuccess = (data: object) => ({
  type: actionType.FETCH_ADVERTISEMENT_SUCCESS,
  data
});

export const fetchAdvertisement = (companySlug: string, jobSlug: string): Function => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchAdvertisementRequest())
    try {
      const { data }: any = await AdvertisementService.get(companySlug, jobSlug)
      dispatch(fetchAdvertisementSuccess(hydrator(data)));
    } catch (error) {
      dispatch(fetchAdvertisementFailure());
    }
  }
}
