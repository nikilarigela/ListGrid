import _ from 'lodash';
import {
  REQUEST_NEWS,
  REQUEST_NEWS_FAILED,
  REQUEST_NEWS_SUCCESS,
} from '../constants/actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
  offset: 0,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state, loading: true };
    case REQUEST_NEWS_FAILED: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case REQUEST_NEWS_SUCCESS: {
      let data = [];
      const { offset } = action.payload;
      if (offset === 0) {
        data = action.payload.data;
      } else {
        data = _.uniq([...state.data, ...action.payload.data], '_id');
      }
      return {
        ...state,
        loading: false,
        data,
        offset,
      };
    }
    default:
      return state;
  }
}

export default profileReducer;
