import { all, takeEvery } from "redux-saga/effects";

function* fetchUsers() {
    console.log("dentro do saga");
}

export default all([takeEvery("user/fetchUsers", fetchUsers)]);
