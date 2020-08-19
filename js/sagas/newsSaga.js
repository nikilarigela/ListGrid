import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REQUEST_NEWS,
  REQUEST_NEWS_FAILED,
  REQUEST_NEWS_SUCCESS,
} from '../constants/actions';
import { get } from '../utils/api';

function* newsWorker(action) {
  try {
    const { data = {} } = yield call(get, `?count=10&offset=${action.payload}`);
    console.log(data);
    yield put({ type: REQUEST_NEWS_SUCCESS, payload: { data } });
  } catch (e) {
    console.log(e.message);
    yield put({ type: REQUEST_NEWS_FAILED, payload: { error: 'failed' } });
  }
}

export default function* profileWatcher() {
  yield takeLatest([REQUEST_NEWS], newsWorker);
}
