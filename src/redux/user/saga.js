import { all, takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFailure } from "./slice";
import axios from "axios";

function* fetchUsersSaga() {
    try {
        const response = yield call(
            axios.get,
            `https://jsonplaceholder.typicode.com/users/`
        );
        yield put(fetchUsersSuccess(response.data));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

export default function* rootSaga() {
    yield all([takeLatest("user/fetchUsers", fetchUsersSaga)]);
}
