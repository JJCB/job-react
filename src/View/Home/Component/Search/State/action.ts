import { Dispatch } from 'redux';
import { LocationService } from './services';
import * as actionType from './actionTypes';

const fetchListLocationsRequest = () => ({
  type: actionType.FETCH_LIST_LOCATION_REQUEST
});
const fetchListLocationsFailure = () => ({
  type: actionType.FETCH_LIST_LOCATION_FAILURE
});
const fetchListLocationsSuccess = (data: object) => ({
  type: actionType.FETCH_LIST_LOCATION_SUCCESS,
  data
});
export const hiddenListLocations = () => ({
  type: actionType.HIDDEN_LIST_LOCATION
});

export const fetchListLocations = (value: string): Function => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchListLocationsRequest())
    try {
      const { data }: any = await LocationService.get(value)
      dispatch(fetchListLocationsSuccess(data.locations));
    } catch (error) {
      dispatch(fetchListLocationsFailure());
    }
  }
}
