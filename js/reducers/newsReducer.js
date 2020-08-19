import {
  REQUEST_NEWS,
  REQUEST_NEWS_FAILED,
  REQUEST_NEWS_SUCCESS,
} from '../constants/actions';

const initialState = {
  data: [],
  loading: false,
  error: null,
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state, loading: true };
    case REQUEST_NEWS_FAILED: {
      return { ...state, loading: false, error: action.payload.error };
    }
    case REQUEST_NEWS_SUCCESS: {
      return {
        ...state,
        loading: false,
        data: [...state.data, action.payload.data],
      };
    }
    default:
      return state;
  }
}

export default profileReducer;
