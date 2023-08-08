import { all } from 'redux-saga/effects';
import contribitionSagas from './sagas/contribitionSagas';

export default function* rootSagas() {
  yield all([
    ...contribitionSagas,
  ]);
};
