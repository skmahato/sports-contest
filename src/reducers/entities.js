import {
  REQUEST_CONTENT_SUCCESS,
  REQUEST_CONTENT_FAILURE
} from '../constants/actionTypes';

const INITIAL_STATE = { content: {}, error: null };

export default function entities(state = INITIAL_STATE, action) {
  switch (action.type) {
    case REQUEST_CONTENT_SUCCESS:
      return {
        content: action.payload,
        error: null
      };
    case REQUEST_CONTENT_FAILURE:
      return {
        ...state,
        content: {},
        error: action.payload.message
      };
    default:
      return state;
  }
}
