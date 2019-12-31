import { Dispatch } from 'redux';
import { JobService } from './services';
import * as actionType from './actionTypes';
import { hydrator } from './hydrators';

const fetchListJobsRequest = () => ({
  type: actionType.FETCH_LIST_JOBS_REQUEST
});
const fetchListJobsFailure = () => ({
  type: actionType.FETCH_LIST_JOBS_FAILURE
});
const fetchListJobsSuccess = (data: object) => ({
  type: actionType.FETCH_LIST_JOBS_SUCCESS,
  data
});
export const setFilterListJobs= (data: object) => ({
  type: actionType.SET_FILTER_LIST_JOBS,
  data
});

export const fetchListJobs = (type: string, slug: string): Function => {
  return async (dispatch: Dispatch) => {
    dispatch(fetchListJobsRequest())
    try {
      const { data }: any = await JobService.get(type, slug)
      dispatch(fetchListJobsSuccess(hydrator(data)));
    } catch (error) {
      dispatch(fetchListJobsFailure());
    }
  }
}
