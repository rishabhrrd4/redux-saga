import { call, put, takeEvery } from "redux-saga/effects";
import { fetchUserFailure, fetchUserSuccess } from "../slices/userSlice";
import { all } from "axios";

function* fetchUser(action) {
  try {
    const user = yield call(fetchUserAPI, action.payload);
    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure(error));
  }
}

function* watchFetchUser() {
  yield takeEvery("user/fetchUserRequest", fetchUser);
}

export default function* rootSaga() {
  yield all([watchFetchUser()]);
}
