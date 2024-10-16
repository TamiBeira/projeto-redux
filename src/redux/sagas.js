import { all } from "redux-saga/effects";
import user from "../redux/user/saga";

export default function* rootSaga() {
    yield all([user()]);
}
