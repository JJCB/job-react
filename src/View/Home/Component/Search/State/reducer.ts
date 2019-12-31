import * as actionType from './actionTypes';
import { LocationModel } from './models';
export interface JobState {
  isFetching: boolean;
  error: boolean;
  filter: object;
  showList: boolean;
  data: Array<LocationModel>;
}

const initialState = {
  isFetching: false,
  showList: true,
  error: false,
  data: []
};
export const locations = (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.FETCH_LIST_LOCATION_REQUEST:
      return {
        ...state,
        showList: true,
        data: [],
        isFetching: true
      }
    case actionType.FETCH_LIST_LOCATION_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case actionType.FETCH_LIST_LOCATION_SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: false,
        data: action.data
      }
    case actionType.HIDDEN_LIST_LOCATION:
      return {
        ...state,
        showList: false,
      }
    default:
      return state;
  }
};
