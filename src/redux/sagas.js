import { call, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_API_DATA, receiveApiData } from './actions';
import { fetchUsers } from './api';

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* getApiData(action) {
   try {
      // api call here
      // const user = yield call(Api.fetchUser, action.payload.userId);
      const user_data = yield call(fetchUsers);
      yield put(receiveApiData(user_data));
   } catch (e) {
      console.log(e);
   }
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
export default function* mySaga() {
  yield takeLatest(REQUEST_API_DATA, getApiData);
}

// export default mySaga;