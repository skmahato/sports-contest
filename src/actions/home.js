import { createAction } from 'redux-actions';

import {
  REQUEST_CONTENT_SUCCESS,
  REQUEST_CONTENT_FAILURE
} from '../constants/actionTypes';
import * as Home from '../api/home';

const requestContentSuccess = createAction(REQUEST_CONTENT_SUCCESS);
const requestContentFailure = createAction(REQUEST_CONTENT_FAILURE);

/* eslint-disable import/prefer-default-export */
export function requestContent() {
  return dispatch => Home.requestContent()
    .then(data => dispatch(requestContentSuccess(data)))
    .catch(error => dispatch(requestContentFailure(error)));
}
