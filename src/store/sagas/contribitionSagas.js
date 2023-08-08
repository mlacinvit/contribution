import { put, takeEvery } from 'redux-saga/effects';
import axiosApi from '../../axiosApi';
import {
    getContribitionRequest,
    getContribitionSuccess,
    getContribitionFailure,

} from '../actions/contribitionAction';

export function* getContribitionsSaga() {
  try {
    const response = yield axiosApi('')
    yield put(getContribitionSuccess(response.data))
  } catch (e) {
    yield put(getContribitionFailure(e))
  }
}

const contributionsSagas = [takeEvery(getContribitionRequest, getContribitionsSaga)];

export default contributionsSagas;
