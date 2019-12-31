import * as actionType from './actionTypes';
export interface JobState {
  isFetching: boolean;
  error: boolean;
  data: Array<Object>;
}

const initialState= {
  isFetching: false,
  error: false,
  data: []
};
export const advertisement = (state = initialState, action: any) => {
  switch (action.type) {
    case actionType.FETCH_ADVERTISEMENT_REQUEST:
      return {
        ...state,
        isFetching: true
      }
    case actionType.FETCH_ADVERTISEMENT_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: true
      }
    case actionType.FETCH_ADVERTISEMENT_SUCCESS:
      return {
        isFetching: false,
        error: false,
        data: action.data
      }
    default:
      return state;
  }
};
