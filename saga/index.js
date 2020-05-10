import { all } from 'redux-saga/effects';

import { requestSagaWatcher } from '../reducer/saga';

export default function* rootSaga() {
  yield all( [requestSagaWatcher()] );
};