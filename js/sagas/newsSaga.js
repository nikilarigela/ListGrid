import { call, put, takeLatest } from 'redux-saga/effects';
import {
  REFRESH_NEWS,
  REQUEST_NEWS,
  REQUEST_NEWS_FAILED,
  REQUEST_NEWS_SUCCESS,
} from '../constants/actions';

function* newsWorker(action) {
  try {
    const data = yield call(() => {});
    console.log(data);
    yield put({ type: REQUEST_NEWS_SUCCESS, payload: { data } });
  } catch (e) {
    console.log(e);
    yield put({ type: REQUEST_NEWS_FAILED, payload: { error: 'failed' } });
  }
}

export default function* profileWatcher() {
  yield takeLatest([REQUEST_NEWS, REFRESH_NEWS], newsWorker);
}
