import { REFRESH_NEWS, REQUEST_NEWS } from '../constants/actions';

const initialState = {
  data: [],
};

function profileReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_NEWS:
      return { ...state };
    case REFRESH_NEWS:
      return { ...state };
    default:
      return state;
  }
}

export default profileReducer;
