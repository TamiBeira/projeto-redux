import { all } from "redux-saga";
import user from "../redux/user/saga";

export default function* rootSaga() {
    return yield all([user]);
}
