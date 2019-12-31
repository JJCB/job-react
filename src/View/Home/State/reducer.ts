import * as actionType from './actionTypes';
import { JobModel } from './models';
export interface JobState {
  isFetching: boolean;
  error: boolean;
  filter: object
  data: Array<JobModel>;
}

const initialStateJob = {
  isFetching: false,
  error: false,
  filter: {
    type: '',
    slug: ''
  },
  data: []
};
export const jobs = (state = initialStateJob, action: any) => {
  switch (action.type) {
    case actionType.FETCH_LIST_JOBS_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionType.FETCH_LIST_JOBS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case actionType.FETCH_LIST_JOBS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.data
      }
    case actionType.SET_FILTER_LIST_JOBS:
      return {
        ...state,
        filter: {
          ...action.data
        }
      }

    default:
      return state;
  }
};
